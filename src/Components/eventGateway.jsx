import React from 'react';
import backgroundImage from '../images/gateway.png'
import {Link} from 'react-router-dom'

const EventGateway = () => {
    return ( 
      <div className="event-gateway"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '256px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
        <div >
          <h3>Your Gateway to Unforgettable Experiences</h3>
          <Link to={"/create-event"} >
             <button className="create-events-button">CREATE EVENTS</button>
          </Link>
        </div>
      </div>
     );
}
 
export default EventGateway;