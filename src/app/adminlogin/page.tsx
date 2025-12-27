'use client';

import { useAdmin, AdminProvider } from '@/contexts/AdminContext';
import LoginForm from '@/components/admin/LoginForm';
import SimpleSubscribersDashboard from '@/components/admin/SimpleSubscribersDashboard';

function AdminLoginPageContent() {
  const { isAuthenticated } = useAdmin();

  return isAuthenticated ? <SimpleSubscribersDashboard /> : <LoginForm />;
}

export default function AdminLoginPage() {
  return (
    <AdminProvider>
      <AdminLoginPageContent />
    </AdminProvider>
  );
}

