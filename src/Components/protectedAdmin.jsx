import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ element, ...rest }) => {
  const userInfo = localStorage.getItem('UserInfo');
  const isAuthenticated = !!userInfo; // Check if user info exists
  const isAdmin = isAuthenticated ? JSON.parse(userInfo).user.admin : false; // Safely parse and check admin status

  return isAuthenticated && isAdmin ? element : <Navigate to="/admin/auth" />;
};

export default ProtectedAdminRoute;
