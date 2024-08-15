import React, { useEffect, useState } from 'react';
import '../styles/orders.css'
import eventimage from'../images/eventimage.png'
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';


const Orders = () => {
    // const [orders, setOrders] = useState(1);
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    
    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };
    

    useEffect(() => {
        const getRegistrations = async () => {
          try {
            setLoading(true);
            const result = await axios.get(environment.appUrl + 'my-registrations', {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
            });
            setLoading(false);

            console.log(result.data.registration);
        
            setOrders(result.data.registration)
            // setCart(result.data.cart);
          } catch (error) {
            setLoading(false);
            notifyError(JSON.stringify(error));
            setOrders([]);
          }
        };
    
        getRegistrations();
      }, [userInfo.token]);


    return ( 
        <>
           <Navigations/>
               <div className="orders">
                <h2>ORDERS(<span>{orders.length}</span>)</h2>
                <div className="orders-section">
                    {orders.map((order, index)=> (
                        <SingleOder order={order} key={index} navigate={navigate} />   
                    ))}
                    {/* <SingleOder/>
                    <SingleOder/> */}
                </div>
               </div>
              
          
           <Footer/>
        </>
     );
}
 
export default Orders;

const SingleOder =({order, key, navigate})=>{
    return(
        <div className="single-order" key={key}>
                        
        <div>
            <img src={order.event.event_image !== null ? order.event.event_image : eventimage} style={{objectFit: 'cover'}} alt="ticket image" />
        </div>

        <div className=''>
            <p className='event-name'>{order.event.event_title}</p>
            <p>
                <span className='price'>₦{order.ticket_cost}</span>
                <span className='location'>{order.event.venue_details}</span>
            </p>
            <p className='ticket'>
            {order.ticket_type} Ticket “{order.event.event_title}” *{order.ticket_quantity}
            </p>
            <p className='order-date'>
            {order.event.event_start.slice(0, order.event.event_start.lastIndexOf(' ')).replace(/-/g, '/')}
            </p>
        </div>
            
        <button onClick={()=> navigate(`/eventInfoUsers/${order.event.id}`)}>
            More info
        </button>
        
    </div>
    )
}