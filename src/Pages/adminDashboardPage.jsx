import React, { useEffect, useState } from 'react';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import BarChart from '../Components/admin-componenets/barchat';
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { GrTicket } from "react-icons/gr";
import "../styles/adminDashboard.css"
import { environment } from '../environment';
import axios from 'axios';
import {Bars} from 'react-loader-spinner'


const AdminDashBoard = () => {
  const userInfo = JSON.parse(localStorage.UserInfo);

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    acceptedEvents: 0,
    pendingEvents: 0,
    ticketsSold: 0,
    revenue: 0,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${userInfo.token}`,
        ContentType: 'application/json',
        Accept: 'application/json',
      };

      // Fetch all data in parallel
      const [users, acceptedEvents, pendingEvents, ticketsSold, revenue] = await Promise.all([
        axios.get(`${environment.appUrl}all-users`, { headers }),
        axios.get(`${environment.appUrl}events`, { headers }),
        axios.get(`${environment.appUrl}pending_events`, { headers }),
        axios.get(`${environment.appUrl}sold-tickets`, { headers }),
        axios.get(`${environment.appUrl}all-revenue`, { headers }),
      ]);

      // Set state once all data is received
      setDashboardData({
        totalUsers: users.data.users.length,
        acceptedEvents: acceptedEvents.data.event.length,
        pendingEvents: pendingEvents.data.event.length,
        ticketsSold: ticketsSold.data.total,
        revenue: revenue.data.total_balance,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userInfo.token]);

  const { totalUsers, acceptedEvents, pendingEvents, ticketsSold, revenue } = dashboardData;

  return (
    <>
      <AdminNavbar />
      <div className="main-container">
        <AdminSidebar />
        <div className="sub-container">
          <div className="heading">
            <h3>Overview</h3>
            <div>Something</div>
          </div>
          {loading ? (
           <section className='mainLoading'>
           <Bars color="#66bb6a" height="40" /> 
        </section>
          ) : (
            <div className="dashboard-grid">
              <DashboardCard 
                icon={<HiOutlineUsers />} 
                label="Total Users" 
                value={totalUsers} 
              />
              <DashboardCard 
                icon={<FaRegCalendarAlt />} 
                label="Total Events Accepted" 
                value={acceptedEvents} 
              />
              <DashboardCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_453_245)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM10.7 8.05C10.3446 7.7188 9.87445 7.53849 9.38869 7.54706C8.90294 7.55563 8.43948 7.75241 8.09595 8.09595C7.75241 8.43948 7.55563 8.90294 7.54706 9.38869C7.53849 9.87445 7.7188 10.3446 8.05 10.7L19.3 21.95C19.6554 22.2812 20.1256 22.4615 20.6113 22.4529C21.0971 22.4444 21.5605 22.2476 21.9041 21.9041C22.2476 21.5605 22.4444 21.0971 22.4529 20.6113C22.4615 20.1256 22.2812 19.6554 21.95 19.3L10.7 8.05Z" fill="#66BB6A"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_453_245">
                            <rect width="30" height="30" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>} 
                label="Pending Events" 
                value={pendingEvents} 
              />
              <DashboardCard 
                icon={<GrTicket />} 
                label="Total Tickets Sold" 
                value={ticketsSold} 
              />
              <DashboardCard 
                icon={<FaMoneyBills />} 
                label="Total Revenue" 
                value={`₦${revenue}`} 
              />
            </div>
          )}

          <div className="graph-container">
            <p>Ticket Purchased Overview</p>
            <BarChart className="graph" />
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardCard = ({ icon, label, value }) => (
  <div className="grid-item">
    <div className="icon-container">{icon}</div>
    <div>
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  </div>
);

export default AdminDashBoard;
