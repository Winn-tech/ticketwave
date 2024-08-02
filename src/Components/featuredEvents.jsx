import React from 'react';
import '../styles/featuredEvents.css'

const FeaturedEvents = () => {
  const events = [
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
    {
      title: "The Oxymoron of Kenyaflag",
      date: "Date: 12/01/2023",
      location: "Location: Nairobi",
      imageUrl: "https://placehold.co/300x200.png?text=Event+Image",
    },
  ];
    return ( 
    <div className="featured-events">
      <h2 className="featured-events-title">Featured Events</h2>
      <div className="featured-events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.imageUrl} alt="Event" className="event-card__image" />
            <div className="event-card-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-label">{event.label}</p>
              <button className="more-info-button">More Info</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-button">VIEW MORE</button>
    </div>
     );
}
 
export default FeaturedEvents;