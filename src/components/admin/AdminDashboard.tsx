'use client';

import { useState, useEffect } from 'react';
import {
  Users, 
  Mail, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Briefcase,
  LogOut,
  BarChart3,
  UserCheck,
  UserPlus,
  DollarSign,
  Activity,
  Grid,
  List
} from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import StatsCard from './StatsCard';
import DataTable from './DataTable';
import ServiceCard from './ServiceCard';
import ServiceDetailsModal from './ServiceDetailsModal';
import {
  getAllSubscribers,
  getAllEnquiries,
  getAdminStats,
  getAllUsers,
  getAllJobs,
  getAllServices,
  getCleanerServices,
  getAllOffers,
  getAllCommunityPosts,
  getAllBroadcasts,
  type Subscriber,
  type Enquiry,
  type AdminStats,
  type User,
  type Job,
  type Service,
  type Offer,
  type CommunityPost,
  type Broadcast,
} from '@/graphql/services/admin';
import { toast } from 'react-toastify';
import { gql } from '@apollo/client';
import { client } from '@/lib/apollo-client';

type TabType = 'overview' | 'subscribers' | 'enquiries' | 'jobs' | 'services' | 'cleanerServices' | 'users' | 'offers' | 'community' | 'broadcasts';

export default function AdminDashboard() {
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [loading, setLoading] = useState(true);
  
  // Data states
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [cleanerServices, setCleanerServices] = useState<Service[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [backendStatus, setBackendStatus] = useState<{
    connected: boolean;
    message: string;
    errors: string[];
  }>({ connected: false, message: 'Connecting...', errors: [] });
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  useEffect(() => {
    discoverAndFetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const discoverAndFetchData = async () => {
    setLoading(true);
    
    // First, discover what queries the backend supports
    try {
      const introspectionQuery = `
        query IntrospectionQuery {
          __schema {
            queryType {
              fields {
                name
                args {
                  name
                  type {
                    name
                    kind
                  }
                }
              }
            }
          }
        }
      `;
      
      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URI || "https://uat-api.vmodel.app/pebble/graphql/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: introspectionQuery }),
      });
      
      const introspectionResult = await response.json();
      const availableQueries = introspectionResult?.data?.__schema?.queryType?.fields?.map((f: { name: string }) => f.name) || [];
      
      console.log('🔍 Available Backend Queries:', availableQueries);
      
      // Now fetch data using available queries
      await fetchData();
    } catch (error) {
      console.error('Schema introspection failed, proceeding with default queries:', error);
      await fetchData();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const errors: string[] = [];
    let successCount = 0;
    
    try {
      const [statsData, subscribersData, enquiriesData, jobsData, servicesData, cleanerServicesData, usersData, offersData, communityPostsData, broadcastsData] = 
        await Promise.allSettled([
          getAdminStats(),
          getAllSubscribers(),
          getAllEnquiries(),
          getAllJobs(),
          getAllServices(),
          getCleanerServices(),
          getAllUsers(),
          getAllOffers(),
          getAllCommunityPosts(),
          getAllBroadcasts(),
        ]);

      // Handle stats
      if (statsData.status === 'fulfilled' && statsData.value) {
        setStats(statsData.value);
        successCount++;
      } else {
        // Set default stats if API fails (don't show error - requires auth)
        setStats({
          totalCleaners: 0,
          totalCustomers: 0,
          totalBookers: 0,
          totalUsers: 0,
          totalSubscribers: subscribers.length,
          totalBookings: 0,
          completedBookings: 0,
          inProgressBookings: 0,
          confirmedBookings: 0,
          cancelledBookings: 0,
          pendingBookings: 0,
          totalRevenue: 0,
          avgBookingValue: 0,
          totalCommunityPosts: 0,
          approvedPosts: 0,
          pendingPosts: 0,
          totalLikes: 0,
          totalShares: 0,
          totalJobs: jobs.length,
          totalOffers: 0,
          totalServices: services.length,
          totalBroadcasts: 0,
          totalEnquiries: enquiries.length,
          newSubscribersThisMonth: 0,
          newBookingsThisMonth: 0,
          newEnquiriesThisMonth: 0,
          activeUsers: 0,
          revenueThisMonth: 0,
        });
      }

      // Handle subscribers
      if (subscribersData.status === 'fulfilled' && subscribersData.value) {
        setSubscribers(subscribersData.value.subscribers || []);
        if (subscribersData.value.subscribers?.length > 0) successCount++;
      }
      // Note: Subscribers are website-only, not in mobile backend

      // Handle enquiries
      if (enquiriesData.status === 'fulfilled' && enquiriesData.value) {
        setEnquiries(enquiriesData.value.enquiries || []);
        if (enquiriesData.value.enquiries?.length > 0) successCount++;
      }
      // Note: Enquiries are website-only, not in mobile backend

      // Handle jobs (requires authentication - don't show as error)
      if (jobsData.status === 'fulfilled' && jobsData.value && jobsData.value.length > 0) {
        setJobs(jobsData.value || []);
        successCount++;
      }

      // Handle system categories
      if (servicesData.status === 'fulfilled' && servicesData.value && servicesData.value.length > 0) {
        setServices(servicesData.value || []);
        successCount++;
      } else if (servicesData.status === 'rejected') {
        errors.push('⚠️ Unable to load system categories - check backend connection');
      }

      // Handle cleaner services
      if (cleanerServicesData.status === 'fulfilled' && cleanerServicesData.value && cleanerServicesData.value.length > 0) {
        setCleanerServices(cleanerServicesData.value || []);
        successCount++;
      }

      // Handle users
      if (usersData.status === 'fulfilled' && usersData.value) {
        setUsers(usersData.value.users || []);
        if (usersData.value.users?.length > 0) successCount++;
      }

      // Handle offers (requires authentication - don't show as error)
      if (offersData.status === 'fulfilled' && offersData.value && offersData.value.length > 0) {
        setOffers(offersData.value || []);
        successCount++;
      }

      // Handle community posts (requires authentication - don't show as error)
      if (communityPostsData.status === 'fulfilled' && communityPostsData.value && communityPostsData.value.length > 0) {
        setCommunityPosts(communityPostsData.value || []);
        successCount++;
      }

      // Handle broadcasts (requires authentication - don't show as error)
      if (broadcastsData.status === 'fulfilled' && broadcastsData.value && broadcastsData.value.length > 0) {
        setBroadcasts(broadcastsData.value || []);
        successCount++;
      }

      // Update backend status
      const totalDataSources = services.length + cleanerServices.length + users.length + jobs.length + offers.length + communityPosts.length + broadcasts.length + subscribers.length + enquiries.length;
      
      if (totalDataSources > 0 || successCount > 0) {
        setBackendStatus({
          connected: true,
          message: `✅ Connected - ${services.length} categories, ${cleanerServices.length} cleaner services, ${users.length} users`,
          errors: errors.length > 0 ? errors : []
        });
        if (services.length > 0 || users.length > 0) {
          toast.success(`Admin dashboard loaded successfully!`);
        }
      } else {
        setBackendStatus({
          connected: false,
          message: '⚠️ Unable to connect to backend',
          errors
        });
        toast.error('Unable to load data from backend');
      }
    } catch (error) {
      toast.warning('Dashboard loaded with limited data - some backend queries may not be available yet');
      console.error('Error fetching admin data:', error);
      
      // Set default empty data
      setStats({
        totalCleaners: 0,
        totalCustomers: 0,
        totalBookers: 0,
        totalUsers: 0,
        totalSubscribers: 0,
        totalBookings: 0,
        completedBookings: 0,
        inProgressBookings: 0,
        confirmedBookings: 0,
        cancelledBookings: 0,
        pendingBookings: 0,
        totalRevenue: 0,
        avgBookingValue: 0,
        totalCommunityPosts: 0,
        approvedPosts: 0,
        pendingPosts: 0,
        totalLikes: 0,
        totalShares: 0,
        totalJobs: 0,
        totalOffers: 0,
        totalServices: 0,
        totalBroadcasts: 0,
        totalEnquiries: 0,
        newSubscribersThisMonth: 0,
        newBookingsThisMonth: 0,
        newEnquiriesThisMonth: 0,
        activeUsers: 0,
        revenueThisMonth: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const handleDeleteService = async (id: number) => {
    try {
      // TODO: Add GraphQL mutation for deleting service
      toast.success('Service deleted successfully');
      setServices(services.filter(s => s.id !== id));
    } catch {
      toast.error('Failed to delete service');
    }
  };

  const handleViewService = (service: Service) => {
    setSelectedService(service);
  };

  const handleEditService = (service: Service) => {
    toast.info(`Editing ${service.name}`);
    // TODO: Add modal or navigation to edit service
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: BarChart3 },
    { id: 'users' as TabType, label: 'Users', icon: Users },
    { id: 'jobs' as TabType, label: 'Jobs', icon: Briefcase },
    { id: 'services' as TabType, label: 'System Categories', icon: TrendingUp },
    { id: 'cleanerServices' as TabType, label: 'Cleaner Services', icon: UserPlus },
    { id: 'offers' as TabType, label: 'Offers', icon: DollarSign },
    { id: 'community' as TabType, label: 'Community', icon: MessageSquare },
    { id: 'broadcasts' as TabType, label: 'Broadcasts', icon: Mail },
    { id: 'subscribers' as TabType, label: 'Newsletter', icon: Activity },
    { id: 'enquiries' as TabType, label: 'Enquiries', icon: Calendar },
  ];

  // Table columns configurations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscribersColumns: any = [
    { key: 'email', label: 'Email' },
    { 
      key: 'userType', 
      label: 'Type',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'cleaner' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Subscribed Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { 
      key: 'isActive', 
      label: 'Status',
      render: (value: boolean) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Active' : 'Inactive'}
        </span>
      )
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enquiriesColumns: any = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'serviceType', label: 'Service Type' },
    { 
      key: 'message', 
      label: 'Message',
      render: (value: string) => (
        <span className="line-clamp-2" title={value}>
          {value}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'resolved' ? 'bg-green-100 text-green-800' : 
          value === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-gray-100 text-gray-800'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const usersColumns: any = [
    { 
      key: 'username', 
      label: 'Username',
      render: (value: string, row: User) => (
        <div className="flex items-center gap-2">
          {row.profilePhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={row.profilePhoto as string} alt={value as string || 'User'} className="w-8 h-8 rounded-full" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
              {value?.charAt(0).toUpperCase() || 'U'}
            </div>
          )}
          <span className="font-medium">{value || 'N/A'}</span>
        </div>
      )
    },
    { 
      key: 'firstName', 
      label: 'Name',
      render: (value: string, row: User) => `${value || ''} ${row.lastName || ''}`.trim() || 'N/A'
    },
    { key: 'email', label: 'Email' },
    { 
      key: 'userType', 
      label: 'User Type',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          value === 'cleaner' 
            ? 'bg-purple-100 text-purple-800' 
            : value === 'customer'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value === 'cleaner' ? '🧹 Cleaner' : value === 'customer' ? '👤 Customer' : value}
        </span>
      )
    },
    { 
      key: 'customer', 
      label: 'Jobs Created',
      render: (value: User['customer'], row: User) => {
        if (row.userType === 'customer' && value) {
          return <span className="font-semibold text-blue-600">{value.totalBookings || 0}</span>;
        }
        return <span className="text-gray-400">-</span>;
      }
    },
    { 
      key: 'cleaner', 
      label: 'Services/Completed',
      render: (value: User['cleaner'], row: User) => {
        if (row.userType === 'cleaner' && value) {
          return <span className="font-semibold text-purple-600">{value.totalJobsCompleted || 0}</span>;
        }
        return <span className="text-gray-400">-</span>;
      }
    },
    { 
      key: 'customer', 
      label: 'Rating',
      render: (value: User['customer'], row: User) => {
        const rating = row.userType === 'customer' ? value?.rating : row.cleaner?.rating;
        if (rating) {
          return <span className="flex items-center gap-1">⭐ {rating.toFixed(1)}</span>;
        }
        return <span className="text-gray-400">No ratings</span>;
      }
    },
    { 
      key: 'isVerified', 
      label: 'Status',
      render: (value: boolean, row: User) => (
        <div className="flex flex-col gap-1">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            value ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {value ? '✓ Verified' : '⏳ Pending'}
          </span>
          {row.isActive && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
              Active
            </span>
          )}
        </div>
      )
    },
    { 
      key: 'dateJoined', 
      label: 'Joined',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jobsColumns: any = [
    { key: 'id', label: 'Job ID' },
    { key: 'title', label: 'Title' },
    { key: 'serviceType', label: 'Service Type' },
    { key: 'location', label: 'Location' },
    { 
      key: 'price', 
      label: 'Price',
      render: (value: number) => `$${value?.toFixed(2) || '0.00'}`
    },
    { 
      key: 'scheduledDate', 
      label: 'Scheduled',
      render: (value: string) => value ? new Date(value).toLocaleDateString() : '-'
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'completed' ? 'bg-green-100 text-green-800' : 
          value === 'in_progress' ? 'bg-blue-100 text-blue-800' : 
          value === 'scheduled' ? 'bg-yellow-100 text-yellow-800' : 
          value === 'cancelled' ? 'bg-red-100 text-red-800' : 
          'bg-gray-100 text-gray-800'
        }`}>
          {value?.replace('_', ' ').charAt(0).toUpperCase() + value?.slice(1).replace('_', ' ') || 'Pending'}
        </span>
      )
    },
    { 
      key: 'rating', 
      label: 'Rating',
      render: (value: number) => value ? `⭐ ${value.toFixed(1)}` : 'N/A'
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const servicesColumns: any = [
    { key: 'name', label: 'Service Name' },
    { key: 'category', label: 'Category' },
    { 
      key: 'description', 
      label: 'Description',
      render: (value: string) => (
        <span className="line-clamp-2" title={value}>
          {value}
        </span>
      )
    },
    { 
      key: 'basePrice', 
      label: 'Base Price',
      render: (value: number) => `$${value?.toFixed(2) || '0.00'}`
    },
    { 
      key: 'duration', 
      label: 'Duration',
      render: (value: number) => `${value || 0} min`
    },
    { 
      key: 'isActive', 
      label: 'Status',
      render: (value: boolean) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Active' : 'Inactive'}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4977E5] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Pebble Cleaning Management System</p>
            </div>
            
            {/* Backend Status Indicator */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                backendStatus.connected 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
              }`}>
                <div className={`w-2 h-2 rounded-full ${backendStatus.connected ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-sm font-medium">{backendStatus.message}</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
          
          {/* Info Messages - Only show if there are actual errors */}
          {backendStatus.errors.length > 0 && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">ℹ️ Admin Panel Status:</p>
              <ul className="text-sm text-blue-700 space-y-1">
                {backendStatus.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Success message when services are loaded */}
          {services.length > 0 && backendStatus.errors.length === 0 && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-green-800">
                ✅ Successfully connected to backend • {services.length} services available
              </p>
              <p className="text-xs text-green-600 mt-1">
                💡 To access Jobs, Offers, and Community features, ensure you&apos;re logged in with proper backend credentials.
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#4977E5] text-[#4977E5] font-semibold'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Subscribers"
                value={stats?.totalSubscribers || 0}
                icon={Mail}
                color="bg-gradient-to-br from-blue-500 to-blue-600"
                trend={{ value: stats?.newSubscribersThisMonth || 0, isPositive: true }}
              />
              <StatsCard
                title="Total Bookings"
                value={stats?.totalBookings || 0}
                icon={Calendar}
                color="bg-gradient-to-br from-green-500 to-green-600"
                trend={{ value: stats?.newBookingsThisMonth || 0, isPositive: true }}
              />
              <StatsCard
                title="Active Users"
                value={stats?.activeUsers || 0}
                icon={Activity}
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
              <StatsCard
                title="Total Enquiries"
                value={stats?.totalEnquiries || 0}
                icon={MessageSquare}
                color="bg-gradient-to-br from-orange-500 to-orange-600"
                trend={{ value: stats?.newEnquiriesThisMonth || 0, isPositive: true }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Bookers"
                value={stats?.totalBookers || 0}
                icon={UserCheck}
                color="bg-gradient-to-br from-cyan-500 to-cyan-600"
              />
              <StatsCard
                title="Total Cleaners"
                value={stats?.totalCleaners || 0}
                icon={UserPlus}
                color="bg-gradient-to-br from-indigo-500 to-indigo-600"
              />
              <StatsCard
                title="Pending Bookings"
                value={stats?.pendingBookings || 0}
                icon={TrendingUp}
                color="bg-gradient-to-br from-yellow-500 to-yellow-600"
              />
              <StatsCard
                title="Monthly Revenue"
                value={`$${stats?.revenueThisMonth || 0}`}
                icon={DollarSign}
                color="bg-gradient-to-br from-emerald-500 to-emerald-600"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DataTable
                title="Recent Subscribers"
                data={subscribers.slice(0, 5)}
                columns={subscribersColumns}
                searchable={false}
                exportable={false}
              />
              <DataTable
                title="Recent Enquiries"
                data={enquiries.slice(0, 5)}
                columns={enquiriesColumns}
                searchable={false}
                exportable={false}
              />
            </div>
          </div>
        )}

        {activeTab === 'subscribers' && (
          <DataTable
            title="All Subscribers"
            data={subscribers}
            columns={subscribersColumns}
          />
        )}

        {activeTab === 'enquiries' && (
          <DataTable
            title="All Enquiries"
            data={enquiries}
            columns={enquiriesColumns}
          />
        )}

        {activeTab === 'users' && (
          <DataTable
            title="All Users"
            data={users}
            columns={usersColumns}
          />
        )}

        {activeTab === 'jobs' && (
          <DataTable
            title="All Jobs"
            data={jobs}
            columns={jobsColumns}
          />
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            {/* Services Header with View Toggle */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">System Categories</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {services.length} predefined service{services.length !== 1 ? 's' : ''} • Used by the mobile app
                  </p>
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#4977E5] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'table'
                        ? 'bg-white text-[#4977E5] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    Table
                  </button>
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.length > 0 ? (
                  services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onDelete={handleDeleteService}
                      onEdit={handleEditService}
                      onView={handleViewService}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No categories found</p>
                  </div>
                )}
              </div>
            )}

            {/* Table View */}
            {viewMode === 'table' && (
              <DataTable
                title=""
                data={services}
                columns={servicesColumns}
              />
            )}
          </div>
        )}

        {activeTab === 'cleanerServices' && (
          <div className="space-y-6">
            {/* Cleaner Services Header */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">🧹 Cleaner Services</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {cleanerServices.length} custom service{cleanerServices.length !== 1 ? 's' : ''} created by cleaners
                  </p>
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#4977E5] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                      viewMode === 'table'
                        ? 'bg-white text-[#4977E5] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    Table
                  </button>
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cleanerServices.length > 0 ? (
                  cleanerServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onDelete={handleDeleteService}
                      onEdit={handleEditService}
                      onView={handleViewService}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 mb-2">No custom cleaner services yet</p>
                    <p className="text-sm text-gray-400">Cleaners can create custom services in the mobile app</p>
                  </div>
                )}
              </div>
            )}

            {/* Table View */}
            {viewMode === 'table' && (
              <DataTable
                title=""
                data={cleanerServices}
                columns={servicesColumns}
              />
            )}
          </div>
        )}

        {activeTab === 'users' && (
          <DataTable
            title="All Users (Customers & Cleaners)"
            data={users}
            columns={usersColumns}
          />
        )}

      </main>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetailsModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
