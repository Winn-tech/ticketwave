import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('UserInfo'); // Replace 'yourLocalStorageKey' with the key you're checking.

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;