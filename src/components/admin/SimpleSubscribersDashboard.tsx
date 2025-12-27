'use client';

import { useState, useEffect } from 'react';
import { Mail, Download, RefreshCw, LogOut, Search, Filter, X } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { getStoredEmails, exportEmailsAsCSV } from '@/utils/emailCollection';
import { toast } from 'react-toastify';

type EmailSubscription = {
  email: string;
  timestamp: string;
  source: string;
  userType?: string;
};

type FilterType = 'all' | 'booker' | 'cleaner';

export default function SimpleSubscribersDashboard() {
  const { logout } = useAdmin();
  const [emails, setEmails] = useState<EmailSubscription[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEmails();
  }, []);

  const loadEmails = () => {
    setLoading(true);
    try {
      const stored = getStoredEmails();
      setEmails(stored);
    } catch (error) {
      console.error('Error loading emails:', error);
      toast.error('Failed to load emails');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    try {
      const csv = exportEmailsAsCSV();
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pebble-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success('Emails exported successfully!');
    } catch (error) {
      console.error('Error exporting emails:', error);
      toast.error('Failed to export emails');
    }
  };

  const filteredEmails = emails.filter(email => {
    // Search filter
    const matchesSearch = 
      email.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.source.toLowerCase().includes(searchTerm.toLowerCase());
    
    // User type filter
    const matchesFilter = 
      filterType === 'all' || 
      (filterType === 'booker' && (!email.userType || email.userType === 'booker')) ||
      (filterType === 'cleaner' && email.userType === 'cleaner');
    
    return matchesSearch && matchesFilter;
  });

  // Count emails by type
  const bookerCount = emails.filter(e => !e.userType || e.userType === 'booker').length;
  const cleanerCount = emails.filter(e => e.userType === 'cleaner').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Email Subscribers</h1>
                <p className="text-sm text-gray-500">Manage all collected email subscriptions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={loadEmails}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Subscribers</p>
                <p className="text-3xl font-bold text-gray-900">{emails.length}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Bookers</p>
                <p className="text-3xl font-bold text-blue-600">{bookerCount}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Cleaners</p>
                <p className="text-3xl font-bold text-purple-600">{cleanerCount}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by email or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filterType === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({emails.length})
                </button>
                <button
                  onClick={() => setFilterType('booker')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filterType === 'booker'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Bookers ({bookerCount})
                </button>
                <button
                  onClick={() => setFilterType('cleaner')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filterType === 'cleaner'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Cleaners ({cleanerCount})
                </button>
              </div>
              {filterType !== 'all' && (
                <button
                  onClick={() => setFilterType('all')}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Clear filter"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Emails Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading emails...</p>
            </div>
          ) : filteredEmails.length === 0 ? (
            <div className="p-12 text-center">
              <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-medium mb-2">
                {searchTerm || filterType !== 'all' 
                  ? 'No emails found matching your criteria' 
                  : 'No emails collected yet'}
              </p>
              <p className="text-gray-500 text-sm">
                {searchTerm || filterType !== 'all'
                  ? 'Try adjusting your search or filter'
                  : 'Emails will appear here once users subscribe'}
              </p>
              {(searchTerm || filterType !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterType('all');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                {filteredEmails.length > 0 && (
                  <tfoot className="bg-gray-50 border-t border-gray-200">
                    <tr>
                      <td colSpan={4} className="px-6 py-3 text-sm text-gray-600">
                        Showing {filteredEmails.length} of {emails.length} subscribers
                        {filterType !== 'all' && ` (filtered by ${filterType})`}
                      </td>
                    </tr>
                  </tfoot>
                )}
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEmails.map((email, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{email.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{email.source}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          email.userType === 'cleaner' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {email.userType === 'cleaner' ? '🧹 Cleaner' : '👤 Booker'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(email.timestamp).toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

