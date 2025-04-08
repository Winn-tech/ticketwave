// LogoutButton.js
import React from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { BiLogOut } from "react-icons/bi";
// import { environment } from '../environment';

const CreatorLogoutButton = (  ) => {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();

    // Redirect to the homepage
    navigate("/events-signin");
  };

    return (
        <button className="logout-button" onClick={handleLogout}>
            <BiLogOut /> Logout
        </button>
    );
};

export default CreatorLogoutButton;
