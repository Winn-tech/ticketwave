// LogoutButton.js
import React from 'react';
import axios from 'axios';
import { BiLogOut } from "react-icons/bi";
import { environment } from '../environment';

const LogoutButton = (data, location ) => {
    const handleLogout = async () => {
        const userInfo = JSON.parse(localStorage.getItem('UserInfo'));

        try {
            // Call logout endpoint
            await axios.post(`${environment.appUrl}/logout`, {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            } );

            // Clear user data from localStorage
            localStorage.removeItem(data);
            // localStorage.removeItem('EventId');
            // localStorage.removeItem('EventTitle');

            // Redirect to login page
            window.location.href = location;
        } catch (error) {
            console.error("Logout failed:", error);
            // Optionally, handle error (e.g., show notification)
        }
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            <BiLogOut /> Logout
        </button>
    );
};

export default LogoutButton;
