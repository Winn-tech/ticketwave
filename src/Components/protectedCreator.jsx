import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedCreatorRoute = ({ element }) => {
  const userInfo = localStorage.getItem('UserInfo');
  const isAuthenticated = !!userInfo;
  const isEventreator = isAuthenticated ? JSON.parse(userInfo).user.admin : false; // Safely parse and check admin status

  return isAuthenticated && isEventreator ? element : <Navigate to="/events-signin" />;
}

export default ProtectedCreatorRoute
