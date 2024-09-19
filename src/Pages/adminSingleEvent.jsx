import React, { useEffect, useState } from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import "../styles/adminEvents.css"
import axios from "axios";
import {toast} from 'react-toastify';
import { environment } from "../environment";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/adminStyles.css"
const AdminSingleEvent = () => {
    const [loading, setLoading] = useState(false);
    const [eventInfo, setEventInfo] = useState({})
    const navigate = useNavigate();
    const [eventId, setEventId] = useState();

    useEffect(()=>{
        const getEventInfo = async () => {
            try {
              const result = await axios.get(environment.appUrl + 'events/' + Eventid, {
                headers: {
                  // Authorization: `Bearer ${userInfo.token}`
                }
              });
              setEventInfo(result.data.event);
      
              // Initialize ticket counts based on the event costs
              const initialCounts = {};
              result.data.event.costs.forEach(cost => {
                initialCounts[cost.level] = 0;
              });
              setTicketCounts(initialCounts);
      
            } catch (error) {
              console.log(error);
              setEventInfo({});
            }
          };
      
          getEventInfo();

    }, [])

    return (  
        <>
            <AdminNavbar/>
            <div className="main-container">
                <AdminSidebar/>
                <div className="sub-container">
                    <div className="heading">
                        <h3>Event info</h3>
                    </div>
                    <div className="event-info">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                    <div className="event-desc">
                        <h3>Event Description</h3>
                        <p>our favorite music-comedy show is returning, THE OXYMORON OF @kennyblaqmcfr_ is
                         back bigger and better !! Get ready for a wild night of music comedy, vibes, and non-stop partying!
                         We’re bringing the energy like never before! Date -28th July 2024.
                        </p>
                        <p>Venue -Eko Hotel & Suites .</p>
                        <p>#ticketwave #TheOxymoronOfKennyBlaq #CatchingCruise</p>
                    </div>
                    <div className="ticket-policy">
                         <h3>Ticket Prices</h3>
                         <div>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>

                         </div>
                    </div>
                    <div className="buttons">
                        <div className="accept-reject">
                        <button>Accept Event</button>
                        <button>Reject Event</button>
                        </div>
                        <button>Validate Event</button>
                    </div>

                    </div>
                    

                </div>

            </div>
        </>
    );
}
 
export default AdminSingleEvent;