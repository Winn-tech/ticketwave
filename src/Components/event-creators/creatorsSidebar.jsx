import React, { useEffect, useState } from 'react'
import { GrTicket } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
// import { environment } from '../environment';
import axios from 'axios';

const CreatorsSidebar = () => {
    const [tickCategories, setTickCategories] = useState([])

    
    useEffect(()=>{
        const fetchTicketCategories = async () => {
            // const response = await axios.get(environment )
        }

    },[])
    
  return (
    <div className="admin-sidebar">
            <div className="logo">
                Ticketwave
            </div>

            <nav className="sidebar-nav">
                <ul>
                <li>
                    <NavLink className="nav-item" to={'/events-attendance/tickets-verified'}>
                    <span style={{color: "black"}}> VVIP</span>
                    <span className='ticket-icon'><GrTicket/></span> 
                    <span>( 24 )</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-item" to={'/events-attendance/tickets-verified'}>
                    <span style={{color: "black"}}> VIP</span>
                    <span className='ticket-icon'><GrTicket/></span> 
                    <span>( 24 )</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-item" to={'/events-attendance/tickets-verified'}>
                    <span style={{color: "black"}}>Gold</span>
                    <span className='ticket-icon'><GrTicket/></span> 
                    <span>( 24 )</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-item" to={'/events-attendance/tickets-verified'}>
                    <span style={{color: "black"}}> Silver</span>
                    <span className='ticket-icon'><GrTicket/></span> 
                    <span>( 27)  </span>
                    </NavLink>
                </li>
                </ul>
            </nav>
            <button className="logout-button">
                <BiLogOut/> Logout
            </button>
            </div>
  )
}

export default CreatorsSidebar
