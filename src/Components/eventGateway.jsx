import React from 'react';
import backgroundImage from '../images/gateway.png'

const EventGateway = () => {
    return ( 
      <div className="event-gateway"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // height: '256px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
        <div >
          <h3>Your Gateway to Unforgettable Experiences</h3>
          <button className="create-events-button">CREATE EVENTS</button>
        </div>
      </div>
     );
}
 
export default EventGateway;