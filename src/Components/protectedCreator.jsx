import React from "react";
import { Navigate } from "react-router-dom";

const ProtectCreatorRoute = ({element})=>{
  const userInfo = localStorage.getItem('UserInfo');
  const isAuthenticated = !!userInfo; // Check if user info exists
  const isCreator = isAuthenticated ? JSON.parse(userInfo).user : false;  //check this later.

  return isAuthenticated && isCreator ? element : <Navigate to='/events-signin' />;
}

export default ProtectCreatorRoute;