import React, { useEffect, useState } from 'react';
import Navigations from '../Components/Navigations/navigations';
import { TbArrowsSort } from "react-icons/tb";
import "../styles/eventspage.css";
import { useGlobalContext } from '../Components/context';
import axios from 'axios';
import { environment } from '../environment';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const { isSortOpen, closeSort, openSort, dropdownPosition, closeOverlay } = useGlobalContext();

  const [popularEvents, setPopularEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${environment.appUrl}events`);
        setFeaturedEvents(response.data.event); 
        
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }

      try {
        const PopEvents = await axios.get(`${environment.appUrl}popular-events`);
        console.log("popular event", PopEvents.data.event);
        setPopularEvents(PopEvents.data.event)
        
      } catch (error) {
        
      }
    };

    

    fetchEvents();
  }, []);

  return (
    <>
      <Navigations />
      <div className="events-container">
        <section className='featured-events-section'>
          <div className="heading">
            <h3>Featured Events</h3>
            <div onClick={openSort}>
              <TbArrowsSort className='icon' />
              Sort
            </div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : featuredEvents.length > 0 ? (
            <div className="featured-events-grid">
              {featuredEvents.map((event, index) => (
                 <div className="event-card" key={index}>
                 {/* Check if event_image is null or empty */}
                 {event.event_image == null || event.event_image === '' ? (
                   <img
                     src="https://s3-alpha-sig.figma.com/img/724a/0a0d/832ee81aad5aab09df1e5231270c6bfa?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L6jMU2MkZkBz177pl14vd-rDmlwNv62xaFW90U7yp-7aFq4JKkO9It1z3jiVnhZmnkbEFBCE1cJJ9jq5Ierx5RUR6rl7SJuJmupL2oYkYo3R-hyBA30wr8S8S19BsGDvxUdHJ3Z-WbNju0F57RwvRkghsXK5JGSloyXutgo68kdRvPjwOAlR4kPN37pvEV6Vqa-yrNiMl160EFTOm6HnU-H0kOLIU8svizMR-3Yvt6mAEl3uClbXuwjCMaQ3iYMC5jrDbQex2HF~nOooR1qbmcEJRpv83ISPE~9gqr5nwUTImRCNwVo9V1XpMeC4s8WggzusYs9we7R~U7WMeNkZYg__"
                     alt="Event"
                     className="event-card__image"
                     style={{ height: '250px', objectFit: 'cover' }}
                   />
                 ) : (
                   <img
                     src={event.event_image}
                     style={{ height: '250px', objectFit: 'cover' }}
                     alt="Event"
                     className="event-card__image"
                   />
                 )}
                 <div className="event-card-content">
                   <h3 className="event-title" style={{ margin: '20px 0px' }}>
                     {event.event_title}
                   </h3>
                   <p className="event-date" style={{ marginBottom: '20px' }}>
                     {event.event_start}
                   </p>
                   <p className="event-label" style={{ marginBottom: '20px' }}>
                     {event.venue_details}
                   </p>
                   <Link to={`/eventInfoUsers/${event.id}`}>
                     <button className="more-info-button">More Info</button>
                   </Link>
                 </div>
               </div>
              ))}
            </div>
          ) : (
            <p>No featured events available.</p>
          )}
        </section>

        <section className='featured-events-section'>
          <div className="heading">
            <h3>Popular Events</h3>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : popularEvents.length > 0 ? (
            <div className="popular-events-grid">
              {popularEvents.map((Pevent) => (
                <div key={Pevent.id}>
                  <p>{Pevent.event_title}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No popular events available.</p>
          )}
        </section>
      </div>

      {isSortOpen && (
        <div
          className="toggle show-sort"
          style={{
            position: 'absolute',
            top: dropdownPosition.top,
            right: window.innerWidth - dropdownPosition.right - 50,
          }}
        >
          <ul onClick={closeSort}>
            <li>Comedy</li>
            <li>Concert</li>
            <li>Get together</li>
          </ul>
        </div>
      )}

      {isSortOpen && (
        <div className="over-lay" onClick={closeOverlay}></div>
      )}
    </>
  );
};

export default EventsPage;
