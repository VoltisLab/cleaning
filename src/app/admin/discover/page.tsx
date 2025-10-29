'use client';

import { useEffect, useState } from 'react';
import { discoverBackendQueries } from '@/utils/discoverBackend';

export default function DiscoverPage() {
  const [queries, setQueries] = useState<Array<{ name: string; description?: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const discover = async () => {
      const availableQueries = await discoverBackendQueries();
      setQueries(availableQueries);
      setLoading(false);
    };
    discover();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Discovering backend queries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Backend Queries</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-6">
            Found {queries.length} queries on the backend server
          </p>
          
          <div className="space-y-4">
            {queries.map((query: { 
              name: string; 
              description?: string; 
              args?: Array<{ name: string }>;
              type?: { name?: string; ofType?: { name?: string } };
            }, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {query.name}
                </h3>
                {query.description && (
                  <p className="text-gray-600 text-sm mb-2">{query.description}</p>
                )}
                {query.args && query.args.length > 0 && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-700">Arguments: </span>
                    <span className="text-sm text-gray-600">
                      {query.args.map((arg) => arg.name).join(', ')}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-sm font-medium text-gray-700">Returns: </span>
                  <span className="text-sm text-gray-600">
                    {query.type?.name || query.type?.ofType?.name || 'Unknown'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Check Browser Console
          </h2>
          <p className="text-blue-700">
            Open your browser&apos;s developer console (F12) to see the detailed list of all available queries
          </p>
        </div>
      </div>
    </div>
  );
}

