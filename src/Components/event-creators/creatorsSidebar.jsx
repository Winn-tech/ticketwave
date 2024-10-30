import React, { useEffect, useState } from 'react';
import { GrTicket } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { environment } from '../../environment';
import axios from 'axios';

const CreatorsSidebar = () => {
    const [tickCategories, setTickCategories] = useState([]);

    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    const eventId = JSON.parse(localStorage.getItem("EventId"));
    const eventName = JSON.parse(localStorage.getItem('EventTitle'));

    useEffect(() => {
        const fetchTicketCategories = async () => {
            try {
                const response = await axios.get(`${environment.appUrl}/validated-tickets/${eventName}/${eventId}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });
                
                // Assuming response contains categories with names and counts
                setTickCategories(response.data.categories);
            } catch (error) {
                console.error("Error fetching ticket categories:", error);
            }
        };
        fetchTicketCategories();
    }, [eventName, eventId, userInfo?.token]);

    return (
        <div className="admin-sidebar">
            <div className="logo">Ticketwave</div>
            <nav className="sidebar-nav">
                <ul>
                    {tickCategories.map((category, index) => (
                        <li key={index}>
                            <NavLink className="nav-item" to={'/events-attendance/tickets-verified'}>
                                <span style={{ color: "black" }}>{category.name}</span>
                                <span className='ticket-icon'><GrTicket /></span> 
                                <span>({category.count})</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="logout-button">
                <BiLogOut /> Logout
            </button>
        </div>
    );
};

export default CreatorsSidebar;
