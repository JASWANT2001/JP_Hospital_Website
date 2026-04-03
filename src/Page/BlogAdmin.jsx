import { useState } from 'react';
import AdminLogin from '../components/blog/AdminLogin';
import AdminDashboard from '../components/blog/AdminDashboard';

const SESSION_KEY = '_blog_token';

export default function BlogAdmin() {
  const [token, setToken] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) || null;
    } catch {
      return null;
    }
  });

  function handleLogin(password) {
    setToken(password);
  }

  function handleLogout() {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
    setToken(null);
  }

  if (!token) {
    return <AdminLogin onSuccess={handleLogin} />;
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />;
}
