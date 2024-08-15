import React, {useState, useEffect} from 'react';
import Notification from '../assets/notification.svg';
import cart from '../assets/cart.svg';
import '../styles/navbar.css'
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  


  return ( 
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">LOGO</div>
                <div className="greeting">
                <span role="img" aria-label="wave">👋</span> Hi Godwin
                </div>
            </div>
            <div className="navbar-center">
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a href="#events">Events</a>
                    </li>
                    <li>
                      <a href="#create-event">Create Event</a> 
                    </li>
                    <li>
                       <a href="#orders">Orders</a>
                    </li>
                    {/* <li>
                      <a href="#orders">Orders</a>
                    </li> */}
                    <li>
                      <a href="#help">Help</a>
                    </li>
                    <li>
                      <a href="#more">More</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="#cart" className="icon">
                <img src={cart} alt="cart" />
                </a>
                <a href="#notifications" className="icon">
                <img src={Notification} />
                {/* <span className="notification-dot"></span> */}
                </a>
                <div className="profile">
                <img src="https://placehold.co/40x40" alt="User Profile" className="profile-pic" />
                <span>Godwin</span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;