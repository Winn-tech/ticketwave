import React, { useEffect, useState } from 'react';
import { GrTicket } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { environment } from '../../environment';
import axios from 'axios';
import LogoutButton from '../logoutButton';
import { useGlobalContext } from '../context';

const CreatorsSidebar = () => {
    const { openScannedTicket, setOpenScannedTicket} = useGlobalContext()
    const [tickCategories, setTickCategories] = useState([]);

    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    const eventId = JSON.parse(localStorage.getItem("eventId"));
    const eventName = JSON.parse(localStorage.getItem('EventTitle'));

    useEffect(() => {
        const fetchTicketCategories = async () => {
            try {
                const response = await axios.get(`${environment.appUrl}validated-tickets/event/${eventId}`, {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });
                
                // Assuming response contains categories with names and counts
                console.log(response.data.ticket_types);
                
                setTickCategories(response.data.ticket_types);
            } catch (error) {
                console.error("Error fetching ticket categories:", error);
            }
        };
        fetchTicketCategories();
    }, [eventName, eventId, userInfo?.token]);

    return (
        <div className="creator-sidebar">
            <div className="logo">Ticketwave</div>
            <nav className="sidebar-nav">
                <ul>
                    {tickCategories.map((category) => (
                        <li key={category.event_id}>
                            <NavLink className="nav-item" to={`/events-attendance/tickets-verified/${category.event_id}`}>
                                <span style={{ color: "black" }}>{category.level}</span>
                                <span className='ticket-icon'><GrTicket /></span> 
                                <span>({category.validated_tickets.length})</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button 
                className='check'
                onClick={()=>setOpenScannedTicket(!openScannedTicket)}
                >
                    check scanned tickets
            </button>
            {/* <button className="logout-button">
                <BiLogOut /> Logout
            </button> */}
           <LogoutButton data="UserInfo" destination="event-signin" />

        </div>
    );
};

export default CreatorsSidebar;
