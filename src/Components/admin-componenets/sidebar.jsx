import React from 'react';
import '../../styles/adminSideAndNavbar.css'
import { MdDashboard } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaMoneyBills } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return ( 
    <div className="admin-sidebar">
      <div className="logo">
        Ticketwave
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink className="nav-item" to={'/admin/admin-dashboard'}>
               <span><MdDashboard/></span> 
               <span> Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-item" to={'/admin/orders'}>
               <span><MdOutlineEventNote/></span> 
               <span> Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-item" to={'/admin/users'}>
               <span><HiOutlineUsers/></span> 
               <span> Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-item" to={'/admin/revenue'}>
               <span><FaMoneyBills/></span> 
               <span> Revenue</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="logout-button">
        <BiLogOut/> Logout
      </button>
    </div>
     );
}
 
export default AdminSidebar;