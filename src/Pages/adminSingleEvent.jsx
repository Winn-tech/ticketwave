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
    const userInfo = JSON.parse(localStorage.UserInfo);


    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    useEffect(()=>{
        let url = window.location.href;
        let Eventid = url.slice(url.lastIndexOf('/') + 1);
        setEventId(Eventid);
        const getEventInfo = async () => {
            try {
              const result = await axios.get(environment.appUrl + 'events/' + Eventid, {
                headers: {
                  // Authorization: `Bearer ${userInfo.token}`
                }
              });
              setEventInfo(result.data.event);
              console.log(result.data.event)
      
            } catch (error) {
              console.log(error);
              setEventInfo({});
            }
          };
      
          getEventInfo();

    }, [eventId])


    const acceptEvent = async () => {
        try {
            const result = await axios.post(environment.appUrl + 'accept-event/' + eventId, {}, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });

            if(result.data.success) {
                notifySuccess('Event Accepted Successfully')
            }else {
                notifyError('An Error Occured')
            }
            console.log(result.data);
        } catch (error) {
            console.log(error);
            notifyError(JSON.stringify(error));

        }
    };


    const rejectEvent = async () => {
        try {
            const result = await axios.post(environment.appUrl + 'reject-event/' + eventId, {}, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            if(result.data.success) {
                notifySuccess('Event Rejected Successfully')
            }else {
                notifyError('An Error Occured')
            }
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    

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
                            <img src={eventInfo.event_image} alt="" />
                        </div>
                    <div className="event-desc">
                        <h3>Event Description</h3>
                        <p>{eventInfo.event_description}
                        </p>
                        <p>{`Venue- ${eventInfo.venue_details}`}</p>
                        <p>
                            {/* {eventInfo.tags.map((tag) => (
                                    
                                    <span key={tag.id} className="event-tag">{tag.name}</span>
                                ))} */}
                        </p>
                    </div>
                    <div className="ticket-policy">
                         <h3>Ticket Prices</h3>
                         <div>
                            {eventInfo.costs && eventInfo.costs.map((cost) => (
                                <p key={cost.id}>
                                    {cost.level}: ₦{cost.cost.toLocaleString('en-US', { minimumFractionDigits: 2 })} (Available: {cost.available})
                                </p>
                            ))}
                         {/* <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p>
                         <p>Early Bird Regular Tickets; ₦10,000.00</p> */}

                         </div>
                    </div>
                    <div className="buttons">
                        <div className="accept-reject">
                        <button onClick={acceptEvent}>Accept Event</button>
                        <button onClick={rejectEvent}>Reject Event</button>
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