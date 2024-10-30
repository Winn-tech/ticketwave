import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedCreatorRoute = ({ element }) => {
  const userInfo = localStorage.getItem('UserInfo');
  const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null;

  // Adjust the condition based on the actual structure of your user info
  const isAuthenticated = parsedUserInfo && parsedUserInfo.message === 'logged in'; 

  return isAuthenticated ? element : <Navigate to="/events-signin" />;
};

export default ProtectedCreatorRoute;
