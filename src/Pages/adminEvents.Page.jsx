import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import { environment } from '../environment';
import "../styles/adminEvents.css";
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import axios from 'axios';

const AdminEventsPage = () => {
  const [loading, setLoading] = useState(false);
  const [waveEvents, setWaveEvents] = useState([]);
  const [catIndex, setCatIndex] = useState(0);

  const categories = ["All Events", "Accepted Events", "Rejected Events"];
  const endpoints = [
        environment.appUrl + 'events', 
        environment.appUrl + 'events', 
        environment.appUrl + 'pending_events', 
  ];

  // Fetch events based on the selected category (tab)
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(endpoints[catIndex]); // Fetch from relevant endpoint
       console.log(response.data)
        setWaveEvents(response.data.event); // Assuming data is in response.data
      } catch (error) {
        console.error("Error fetching events:", error);
        setWaveEvents([])
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(); // Call fetch function on category change
  }, [catIndex]);

  const handleTabChange = (index) => {
    setCatIndex(index)
  };

  return (
    <>
      <AdminNavbar />
      <div className="main-container">
        <AdminSidebar />
        <div className="sub-container">
          <div className='heading'>
            <h3>Events</h3>
          </div>
          <ul className="events-types">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleTabChange(index)}
                className={catIndex === index ? "active" : ""}
              >
                {category}
              </li>
            ))}
          </ul>

          {/* Loader */}
          {loading ? (
            <section className='mainLoading'>
              <Bars color="#66bb6a" height="40" />
            </section>
          ) : (
            <div className="events-grid">
              {waveEvents.length > 0 ? (
                waveEvents.map((event, index) => (
                  <div className="event-card" key={index}>
                    <img src={event.event_image} alt="" />
                    <p>{event.event_title}</p>
                    <Link to={`/eventInfoUsers/${event.id}`}>
                      <button className="more-info-button">More Info</button>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No events found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminEventsPage;
