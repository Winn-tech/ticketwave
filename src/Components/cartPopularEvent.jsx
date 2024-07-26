import React from 'react';
const CartPopularEvents = () => {
  return ( 
    <div className="popular-events">
        <h2>Popular Events</h2>
        <div className="events-flex">
          <div className="event-card">
            <img src="https://placehold.co/150" alt="Event" />
            <h3>THE OXYMORON OF KENNYBLAQ</h3>
            <p>DATE: 28/07/2024</p>
            <p>LAGOS</p>
            <button className="more-info-button">More Info</button>
          </div>
        
          <div className="event-card selected">
            <img src="https://placehold.co/150" alt="Event" />
            <h3 className='event-title'>THE OXYMORON OF KENNYBLAQ</h3>
            <p>DATE: 28/07/2024</p>
            <p>LAGOS</p>
            <button className="more-info-button">More Info</button>
          </div>

          <div className="event-card selected">
            <img src="https://placehold.co/150" alt="Event" />
            <h3>THE OXYMORON OF KENNYBLAQ</h3>
            <p>DATE: 28/07/2024</p>
            <p>LAGOS</p>
            <button className="more-info-button">More Info</button>
          </div>

          <div className="event-card">
            <img src="https://placehold.co/150" alt="Event" />
            <h3>THE OXYMORON OF KENNYBLAQ</h3>
            <p>DATE: 28/07/2024</p>
            <p>LAGOS</p>
            <button className="more-info-button">More Info</button>
          </div>
          </div>
      </div>
   );
}
 
export default CartPopularEvents;