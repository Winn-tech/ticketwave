import React from 'react';
import Notification from '../../assets/notification.svg';
import { RiNotification2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (  
        <nav className='admin-navbar'>
            
            <aside>
                <div>
                    <h3>Hi Godwin</h3>
                    <p>Let’s get productive today!</p>
                </div>
            </aside>
            <aside className='second'>

                <div className="search">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.66668 13.9997C11.1645 13.9997 14 11.1641 14 7.66634C14 4.16854 11.1645 1.33301 7.66668 1.33301C4.16887 1.33301 1.33334 4.16854 1.33334 7.66634C1.33334 11.1641 4.16887 13.9997 7.66668 13.9997Z" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6667 14.6663L13.3333 13.333" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <input type="text" placeholder='search' />
                </div>

               <Link to={'/admin/notifications'}> 
                <div className="notification">
                    <svg xmlns="http://www.w3.org/2000/svg" className='dot' width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4.5" fill="#FF4B4B" stroke="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14.0234 3.39453C10.1618 3.39453 7.02344 6.53286 7.02344 10.3945V13.7662C7.02344 14.4779 6.7201 15.5629 6.35844 16.1695L5.01677 18.3979C4.18844 19.7745 4.7601 21.3029 6.27677 21.8162C11.3051 23.4962 16.7301 23.4962 21.7584 21.8162C23.1701 21.3495 23.7884 19.6812 23.0184 18.3979L21.6768 16.1695C21.3268 15.5629 21.0234 14.4779 21.0234 13.7662V10.3945C21.0234 6.54453 17.8734 3.39453 14.0234 3.39453Z" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M16.1817 3.73367C15.82 3.62867 15.4467 3.54701 15.0617 3.50034C13.9417 3.36034 12.8683 3.44201 11.865 3.73367C12.2033 2.87034 13.0433 2.26367 14.0233 2.26367C15.0033 2.26367 15.8433 2.87034 16.1817 3.73367Z" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5234 22.2363C17.5234 24.1613 15.9484 25.7363 14.0234 25.7363C13.0668 25.7363 12.1801 25.3397 11.5501 24.7097C10.9201 24.0797 10.5234 23.193 10.5234 22.2363" stroke="#3A3A3A" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                    </div>
               </Link>

                <div className>
                     <h3>Godwim</h3>
                     <p>admin</p>
                </div>
            </aside>

        </nav>
    );
}
 
export default AdminNavbar;