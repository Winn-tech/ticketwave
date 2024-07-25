import React from 'react';
import Footer from '../Components/footer';
import Navbar from '../Components/Navbar';
import { BiSortAlt2 } from "react-icons/bi";
const CreateEventAdmin = () => {
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
    <>
      <Navbar/>
          <div className="create-event-container">
            <div className="header">
              <div className='first'>My Events</div>
              <div className='second'><BiSortAlt2/>Sort</div>
            </div>
            <div className='featured-events-grid'>
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
          </div>
      <Footer/>
    </>
   );
}
 
export default CreateEventAdmin;