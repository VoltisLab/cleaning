'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag
    setIsClient(true);
    
    // Check if admin is already logged in
    if (typeof window !== 'undefined') {
      const adminAuth = localStorage.getItem('adminAuth');
      if (adminAuth === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Hardcoded credentials as requested
    if (username === 'Admin' && password === 'Password123!!!') {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuth', 'true');
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuth');
    }
  };

  // Render loading state during SSR/initial hydration
  if (!isClient) {
    return (
      <AdminContext.Provider value={{ isAuthenticated: false, login, logout }}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </AdminContext.Provider>
    );
  }

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

