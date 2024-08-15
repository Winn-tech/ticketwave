import { React, useEffect, useState } from "react";
import "../styles/eventsInfo.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";
import eventimage from "../images/eventimage.png";
import Footer from "../Components/footer";
import Navigations from "../Components/Navigations/navigations";
import axios from "axios";
import {toast} from 'react-toastify';
import { environment } from "../environment";
import { Link, useNavigate } from "react-router-dom";

const EventInfoUser = () => {
  const [ticketCounts, setTicketCounts] = useState({});
  const [eventInfo, setEventInfo] = useState({});
  const userInfo = JSON.parse(localStorage.UserInfo);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [addCart, setAddCart] = useState(false);

  const [eventId, setEventId] = useState();



  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
      toast.error(message);
  };


  useEffect(() => {
    let url = window.location.href;
    let Eventid = url.slice(url.lastIndexOf('/') + 1);

    setEventId(Eventid);

    const getEventInfo = async () => {
      try {
        const result = await axios.get(environment.appUrl + 'events/' + Eventid, {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
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
  }, [userInfo.token]);

  const handleIncrement = (level, max) => {
    setTicketCounts((prev) => ({
      ...prev,
      [level]:  (prev[level] >= max) ? prev[level] : prev[level] + 1,
    }));

    setAddCart(true);
  };

  const handleDecrement = (level) => {
    setTicketCounts((prev) => ({
      ...prev,
      [level]: Math.max(prev[level] - 1, 0),
    }));
  };

  function formatDate(dateString) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(dateString);

    const month = months[date.getMonth()];
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;

    return `${month} ${day} @ ${hours}:${minutes}${ampm}`;
  }


  const AddtoCart = async () => {   
    const mappedTicketCounts = Object.entries(ticketCounts)
        .filter(([level, count]) => count > 0) 
        .flatMap(([level, count]) => eventInfo.costs.filter((cost) => cost.level === level));

    let hasShown = false; 

    const tickets = mappedTicketCounts.map(ticket => ({
        event_id: eventId,
        quantity: ticketCounts[ticket.level],
        ticket_cost: ticket.cost,
        ticket_type: ticket.level
    }));

    try {
        setLoading(true);

        const result = await axios.post(environment.appUrl + 'carts', { tickets }, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
                'Content-Type': 'application/json', 
            }
        });

        setLoading(false);

        console.log(result.data);

        if (result.data.success) {
            if (!hasShown) {
                notifySuccess(result.data.message);
                hasShown = true;
            }
            navigate('/cart');
        } else {
            if (!hasShown) {
                notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
            }
        }
    } catch (error) {
        setLoading(false);
        notifyError(`Error: ${error.response ? error.response.data.message : error.message}`);
        console.error('There was an error posting the data!', error);
    }
  };


  return (
    <>
      <Navigations />
      <div className="events-info-container">
        <div className="event-info-img">
          <img src={eventInfo.event_image} style={{ objectFit: 'cover', objectPosition: 'center' }} alt="" />
        </div>
        <div className="events-description">
          <h3>Event Description</h3>
          <p>{eventInfo.event_description}</p>
          <hr />
          <div className="summary">
            <p>
              <span><BiCalendar className="icon" /></span>
              <span className="text">{formatDate(eventInfo.event_start)} - 11:30 pm</span>
            </p>
            <p>
              <span><IoLocationOutline className="icon" /></span>
              <span className="text">{eventInfo.venue_details}</span>
            </p>
            <p>
              <span><IoPricetagOutline className="icon" /></span>
              <span className="text">
                {eventInfo.tags && eventInfo.tags.map((tag, index) => (
                  <span key={index}>#{tag.name}</span>
                ))}
              </span>
            </p>
            <p>
              <span><TbCategory className="icon" /></span>
              <span className="text">{eventInfo.event_category}</span>
            </p>
            <p className="price">
              {eventInfo.costs && (() => {
                const sortedCosts = eventInfo.costs.sort((a, b) => a.cost - b.cost);
                const lowestCost = sortedCosts[0].cost;
                const highestCost = sortedCosts[sortedCosts.length - 1].cost;
                return '₦' + lowestCost + " - " + "₦" + highestCost;
              })()}
            </p>
          </div>
          <div className="tickets">
            <h4>Ticket Purchase</h4>
            {eventInfo.costs && eventInfo.costs.map((cost, index) => (
              <div className="ticket-item" key={index}>
                <p className="button-group">
                  <span className="btn" onClick={() => handleDecrement(cost.level)}>-</span>
                  <span>{ticketCounts[cost.level]}</span>
                  <span className="btn" onClick={() => handleIncrement(cost.level, cost.available)}>+</span>
                </p>
                <p>{cost.level} "{eventInfo.event_title}"</p>
                <p className="price"> - ₦ {cost.cost}</p>
                <p>Available: {cost.available}</p>
              </div>
            ))}
          </div>
          <button onClick={()=> {addCart && AddtoCart()}} disabled={loading} >Buy Tickets</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventInfoUser;

























{/* {[
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
))} */}