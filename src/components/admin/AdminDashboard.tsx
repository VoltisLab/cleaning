'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Activity
} from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import StatsCard from './StatsCard';
import DataTable from './DataTable';
import {
  getAllSubscribers,
  getAllEnquiries,
  getAllBookings,
  getAdminStats,
  getAllUsers,
  getCleanerApplications,
  getAllJobs,
  getAllServices,
  getAllOffers,
  getAllCommunityPosts,
  getPendingPosts,
  getAllBroadcasts,
  type Subscriber,
  type Enquiry,
  type Booking,
  type AdminStats,
  type User,
  type CleanerApplication,
  type Job,
  type Service,
  type Offer,
  type CommunityPost,
  type Broadcast,
} from '@/graphql/services/admin';
import { toast } from 'react-toastify';

type TabType = 'overview' | 'subscribers' | 'enquiries' | 'jobs' | 'services' | 'offers' | 'community' | 'broadcasts';

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
  const [offers, setOffers] = useState<Offer[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [backendStatus, setBackendStatus] = useState<{
    connected: boolean;
    message: string;
    errors: string[];
  }>({ connected: false, message: 'Connecting...', errors: [] });

  useEffect(() => {
    discoverAndFetchData();
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
      const availableQueries = introspectionResult?.data?.__schema?.queryType?.fields?.map((f: any) => f.name) || [];
      
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
      const [statsData, subscribersData, enquiriesData, jobsData, servicesData, offersData, communityPostsData, broadcastsData] = 
        await Promise.allSettled([
          getAdminStats(),
          getAllSubscribers(),
          getAllEnquiries(),
          getAllJobs(),
          getAllServices(),
          getAllOffers(),
          getAllCommunityPosts(),
          getAllBroadcasts(),
        ]);

      // Handle stats
      if (statsData.status === 'fulfilled' && statsData.value) {
        setStats(statsData.value);
        successCount++;
      } else {
        errors.push('Admin Analytics failed to load');
        // Set default stats if API fails
        setStats({
          totalCleaners: 0,
          totalCustomers: 0,
          totalUsers: 0,
          totalBookings: 0,
          completedBookings: 0,
          inProgressBookings: 0,
          confirmedBookings: 0,
          cancelledBookings: 0,
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
        });
      }

      // Handle subscribers
      if (subscribersData.status === 'fulfilled' && subscribersData.value) {
        setSubscribers(subscribersData.value.subscribers || []);
        if (subscribersData.value.subscribers?.length > 0) successCount++;
      } else {
        errors.push('Subscribers failed to load (website only)');
      }

      // Handle enquiries
      if (enquiriesData.status === 'fulfilled' && enquiriesData.value) {
        setEnquiries(enquiriesData.value.enquiries || []);
        if (enquiriesData.value.enquiries?.length > 0) successCount++;
      } else {
        errors.push('Enquiries failed to load (website only)');
      }

      // Handle jobs
      if (jobsData.status === 'fulfilled' && jobsData.value && jobsData.value.length > 0) {
        setJobs(jobsData.value || []);
        successCount++;
      } else if (jobsData.status === 'rejected') {
        errors.push('Jobs failed to load - likely requires authentication');
      } else {
        errors.push('No jobs found in database');
      }

      // Handle services
      if (servicesData.status === 'fulfilled' && servicesData.value && servicesData.value.length > 0) {
        setServices(servicesData.value || []);
        successCount++;
      } else if (servicesData.status === 'rejected') {
        errors.push('Services failed to load - likely requires authentication');
      } else {
        errors.push('No services found in database');
      }

      // Handle offers
      if (offersData.status === 'fulfilled' && offersData.value && offersData.value.length > 0) {
        setOffers(offersData.value || []);
        successCount++;
      } else if (offersData.status === 'rejected') {
        errors.push('Offers failed to load - likely requires authentication');
      } else {
        errors.push('No offers found in database');
      }

      // Handle community posts
      if (communityPostsData.status === 'fulfilled' && communityPostsData.value && communityPostsData.value.length > 0) {
        setCommunityPosts(communityPostsData.value || []);
        successCount++;
      } else if (communityPostsData.status === 'rejected') {
        errors.push('Community posts failed to load - likely requires authentication');
      } else {
        errors.push('No community posts found in database');
      }

      // Handle broadcasts
      if (broadcastsData.status === 'fulfilled' && broadcastsData.value && broadcastsData.value.length > 0) {
        setBroadcasts(broadcastsData.value || []);
        successCount++;
      } else if (broadcastsData.status === 'rejected') {
        errors.push('Broadcasts failed to load - likely requires authentication');
      } else {
        errors.push('No broadcasts found in database');
      }

      // Update backend status
      if (successCount > 0) {
        setBackendStatus({
          connected: true,
          message: `✅ Connected to backend - ${successCount} data sources loaded`,
          errors: errors.length > 0 ? errors : []
        });
        toast.success(`Dashboard loaded - ${successCount} data sources active`);
      } else {
        setBackendStatus({
          connected: false,
          message: '⚠️ Backend connection issue - No data loaded',
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
        totalUsers: 0,
        totalBookings: 0,
        completedBookings: 0,
        inProgressBookings: 0,
        confirmedBookings: 0,
        cancelledBookings: 0,
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
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview', icon: BarChart3 },
    { id: 'jobs' as TabType, label: 'Jobs', icon: Briefcase },
    { id: 'services' as TabType, label: 'Services', icon: TrendingUp },
    { id: 'offers' as TabType, label: 'Offers', icon: DollarSign },
    { id: 'community' as TabType, label: 'Community', icon: Users },
    { id: 'broadcasts' as TabType, label: 'Broadcasts', icon: MessageSquare },
    { id: 'subscribers' as TabType, label: 'Subscribers', icon: Mail },
    { id: 'enquiries' as TabType, label: 'Enquiries', icon: Activity },
  ];

  // Table columns configurations
  const subscribersColumns = [
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

  const enquiriesColumns = [
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

  const bookingsColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'city', label: 'City' },
    { key: 'serviceType', label: 'Service' },
    { 
      key: 'date', 
      label: 'Booking Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { key: 'timeSlot', label: 'Time' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'completed' ? 'bg-green-100 text-green-800' : 
          value === 'confirmed' ? 'bg-blue-100 text-blue-800' : 
          value === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
  ];

  const usersColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
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
    { key: 'totalBookings', label: 'Bookings' },
    { 
      key: 'isVerified', 
      label: 'Verified',
      render: (value: boolean) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {value ? 'Verified' : 'Pending'}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Joined',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  const applicationsColumns = [
    { 
      key: 'firstName', 
      label: 'Name',
      render: (value: string, row: CleanerApplication) => `${row.firstName} ${row.lastName}`
    },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'experience', label: 'Experience' },
    { key: 'availability', label: 'Availability' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'approved' ? 'bg-green-100 text-green-800' : 
          value === 'rejected' ? 'bg-red-100 text-red-800' : 
          'bg-yellow-100 text-yellow-800'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Applied Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  const jobsColumns = [
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

  const servicesColumns = [
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

  const transactionsColumns = [
    { key: 'id', label: 'Transaction ID' },
    { key: 'userId', label: 'User ID' },
    { key: 'jobId', label: 'Job ID' },
    { 
      key: 'amount', 
      label: 'Amount',
      render: (value: number) => `$${value?.toFixed(2) || '0.00'}`
    },
    { key: 'paymentMethod', label: 'Payment Method' },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          value === 'completed' ? 'bg-green-100 text-green-800' : 
          value === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
          value === 'failed' ? 'bg-red-100 text-red-800' : 
          'bg-gray-100 text-gray-800'
        }`}>
          {value?.charAt(0).toUpperCase() + value?.slice(1) || 'Unknown'}
        </span>
      )
    },
    { 
      key: 'transactionDate', 
      label: 'Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  const reviewsColumns = [
    { key: 'jobId', label: 'Job ID' },
    { key: 'customerId', label: 'Customer ID' },
    { key: 'cleanerId', label: 'Cleaner ID' },
    { 
      key: 'rating', 
      label: 'Rating',
      render: (value: number) => (
        <span className="flex items-center gap-1">
          <span>⭐</span>
          <span className="font-semibold">{value?.toFixed(1) || 'N/A'}</span>
        </span>
      )
    },
    { 
      key: 'comment', 
      label: 'Comment',
      render: (value: string) => (
        <span className="line-clamp-2" title={value}>
          {value || 'No comment'}
        </span>
      )
    },
    { 
      key: 'createdAt', 
      label: 'Date',
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
          
          {/* Error Messages */}
          {backendStatus.errors.length > 0 && (
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ Some data sources could not be loaded:</p>
              <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
                {backendStatus.errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
              <p className="text-xs text-yellow-600 mt-2">
                💡 Tip: Most queries require JWT authentication from the backend. Website-only queries (subscribers, enquiries) may not exist in the mobile backend.
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

        {activeTab === 'bookings' && (
          <DataTable
            title="All Bookings"
            data={bookings}
            columns={bookingsColumns}
          />
        )}

        {activeTab === 'users' && (
          <DataTable
            title="All Users"
            data={users}
            columns={usersColumns}
          />
        )}

        {activeTab === 'applications' && (
          <DataTable
            title="Cleaner Applications"
            data={applications}
            columns={applicationsColumns}
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
          <DataTable
            title="All Services"
            data={services}
            columns={servicesColumns}
          />
        )}

        {activeTab === 'transactions' && (
          <DataTable
            title="All Transactions"
            data={transactions}
            columns={transactionsColumns}
          />
        )}

        {activeTab === 'reviews' && (
          <DataTable
            title="All Reviews"
            data={reviews}
            columns={reviewsColumns}
          />
        )}
      </main>
    </div>
  );
}

