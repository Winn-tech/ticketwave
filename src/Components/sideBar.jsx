import React from 'react';
import '../styles/sideBar.css'
const SideBar = () => {
    return (  
        <div className="sidebar show">
            <div className='sidebar-center'>
            <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="events">Events</a>
                    </li>
                    <li>
                      <a href="#create-event">Create Event</a> 
                    </li>
                    <li>
                       <a href="#orders">Orders</a>
                    </li>
                    <li>
                      <a href="#orders">Orders</a>
                    </li>
                    <li>
                      <a href="#help">Help</a>
                    </li>
                    <li>
                      <a href="#more">More</a>
                    </li>
                </ul>

            </div>
        </div>
    );
}
 
export default SideBar;