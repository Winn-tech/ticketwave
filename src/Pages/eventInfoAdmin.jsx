import { React, useState } from "react";
import "../styles/eventsInfo.css"
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";
import eventimage from "../images/eventimage.png"
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
const EventInfoAdmin = () => {
    const [ticketCounts, setTicketCounts] = useState({
        regular: 0,
        earlyBirdK: 0,
        earlyBirdX: 0,
        vip: 0,
        vvip: 0,
      });
    
      const handleIncrement = (type) => {
        setTicketCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
      };
    
      const handleDecrement = (type) => {
        setTicketCounts((prev) => ({ ...prev, [type]: Math.max(prev[type] - 1, 0) }));
      };
    return ( 
    <>
        <Navbar/>
        <div className="events-info-container">
          <div className="event-info-img">
            <img src={eventimage} alt="" />
          </div>
          <div className="events-description">
            <h3>Event Description</h3>
            <p>
                 Your favorite music-comedy show is returning, THE OXYMORON OF @kennyblaqmcfr_ is back bigger and better !! Get ready for a wild night of music comedy, vibes, and non-stop partying! We’re bringing the energy like never before! Date -28th July 2024.
                  Venue -Eko Hotel & Suites .
                  Don’t miss out!
                  Grab your tickets online www.ticketwave.com
                  For tickets booking Pls Call 0810287133408102871334 (WhatsApp)
                  #ticketwave #TheOxymoronOfKennyBlaq #CatchingCruise
            </p>
            <hr />
            <div className="summary">
              <p>
                <span ><BiCalendar className="icon"/></span> <span className="text">July 28 @ 6:00 pm - 11:30 pm</span>
              </p>
              <p>
                <span ><IoLocationOutline className="icon"/></span> <span className="text">EKO HOTEL & SUITES</span>
              </p>
              <p>
                <span ><IoPricetagOutline className="icon"/></span>   <span className="text">#ticketwave#CatchingCruise</span>
                </p>
              <p>
                <span ><TbCategory className="icon"/></span>  <span className="text">Comedy & Concert</span>
              </p>
              <p className="price">
                ₦10000 – ₦100000
              </p>
            </div>
            <div className="tickets">
              <h4>Ticket Purchase</h4>
            {[
                { type: 'regular', label: 'Regular Tickets "KennyBlaq"', price: 20000 },
                { type: 'earlyBirdK', label: 'Early Bird Regular Tickets "KB"', price: 15000 },
                { type: 'earlyBirdX', label: 'Early Bird VIP Tickets "X"', price: 25000 },
                { type: 'vip', label: 'VIP Tickets "KennyBlaq"', price: 50000 },
                { type: 'vvip', label: 'VVIP Tickets "KennyBlaq"', price: 80000 },
                ].map(({ type, label, price }) => (
            <div className="ticket-item" key={type}>
                <p className="button-group">
                  <span className="btn" onClick={() => handleDecrement(type)}>-</span>
                  <span>{ticketCounts[type]}</span>
                  <span  className="btn" onClick={() => handleIncrement(type)}>+</span>
                </p>

                <p>{label}</p>
                <p className="price">  - ₦ {price}</p>
                
                <p>Available: 402</p>
            </div>
            ))}
            </div>
            <button> Edit Tickets</button>
          </div>
          
        </div>
        <Footer/>
        </>
     );
}
 
export default EventInfoAdmin;