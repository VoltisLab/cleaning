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
  type Subscriber,
  type Enquiry,
  type Booking,
  type AdminStats,
  type User,
  type CleanerApplication,
} from '@/graphql/services/admin';
import { toast } from 'react-toastify';

type TabType = 'overview' | 'subscribers' | 'enquiries' | 'bookings' | 'users' | 'applications';

export default function AdminDashboard() {
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [loading, setLoading] = useState(true);
  
  // Data states
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<CleanerApplication[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsData, subscribersData, enquiriesData, bookingsData, usersData, applicationsData] = 
        await Promise.all([
          getAdminStats(),
          getAllSubscribers(),
          getAllEnquiries(),
          getAllBookings(),
          getAllUsers(),
          getCleanerApplications(),
        ]);

      setStats(statsData);
      setSubscribers(subscribersData.subscribers || []);
      setEnquiries(enquiriesData.enquiries || []);
      setBookings(bookingsData.bookings || []);
      setUsers(usersData.users || []);
      setApplications(applicationsData.applications || []);
    } catch (error) {
      toast.error('Failed to fetch data');
      console.error('Error fetching admin data:', error);
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
    { id: 'subscribers' as TabType, label: 'Subscribers', icon: Mail },
    { id: 'enquiries' as TabType, label: 'Enquiries', icon: MessageSquare },
    { id: 'bookings' as TabType, label: 'Bookings', icon: Calendar },
    { id: 'users' as TabType, label: 'Users', icon: Users },
    { id: 'applications' as TabType, label: 'Applications', icon: Briefcase },
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Pebble Cleaning Management System</p>
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
      </main>
    </div>
  );
}

