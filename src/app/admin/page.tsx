'use client';

import { useState } from 'react';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For demo purposes, we'll use a simple state to toggle between login and dashboard
  // In a real application, you would use proper authentication with tokens/cookies

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <AdminDashboard />
      ) : (
        <AdminLogin />
      )}
    </div>
  );
}