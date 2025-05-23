import React, {useEffect, useState} from 'react';
import '../styles/featuredEvents.css'
import { environment } from '../environment';
import {toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// import { Link } from 'react-router-dom';

const FeaturedEvents = () => {
  

  // const userInfo = JSON.parse(localStorage.UserInfo);
  const [event, setEvent] = useState([]);


  useEffect(()=> {
    const getEvents= async()=>{
      // console.log(userInfo.token)
      try {
        const result = await axios.get(environment.appUrl + 'events', {
          headers: {
              // Authorization: `Bearer ${userInfo.token}`
          }
        });
        console.log(result.data.event);
        setEvent(result.data.event);
        
      } catch (error) {
        console.log(error);
        setEvent([]);
      }


    }

    getEvents();

  }, []);


    return ( 
    <div className="featured-events">
      <h2 className="featured-events-title">Featured Events</h2>
      {
       event && event.length > 0 && <div className="featured-events-grid">
  
        {/* {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.imageUrl} alt="Event" className="event-card__image" />
            <div className="event-card-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-label">{event.label}</p>
              <Link to={'/eventInfoUsers'}>
                  <button className="more-info-button" > More Info </button>
              </Link>
            </div>
          </div>
        ))} */}
        {event.map((event, index) => {
  // Check if event_image is null or undefined
  // const imageUrl = event.event_image ? new URL(event.event_image) : null;
  // const filename = imageUrl ? imageUrl.pathname.split('/').pop() : '';

  return (
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
  );
})}


      </div>}
      { event && event.length == 0 && <h1 style={{textAlign: 'center', width: '100%', marginTop: '30px'}}>NO EVENT</h1>}
      {event && event.length > 6 && <button className="view-more-button">VIEW MORE</button>}
    </div>
     );
}
 
export default FeaturedEvents;