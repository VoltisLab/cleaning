'use client';

import { useAdmin, AdminProvider } from '@/contexts/AdminContext';
import LoginForm from '@/components/admin/LoginForm';
import AdminDashboard from '@/components/admin/AdminDashboard';

function AdminLoginPageContent() {
  const { isAuthenticated } = useAdmin();

  return isAuthenticated ? <AdminDashboard /> : <LoginForm />;
}

export default function AdminLoginPage() {
  return (
    <AdminProvider>
      <AdminLoginPageContent />
    </AdminProvider>
  );
}

