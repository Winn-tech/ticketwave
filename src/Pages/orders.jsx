import React, { useState } from 'react';
import '../styles/orders.css'
import eventimage from'../images/eventimage.png'
import Footer from '../Components/footer';
import Navigations from '../Components/Navigations/navigations';

const Orders = () => {

    const [orders, setOrders] = useState(1)
    return ( 
        <>
           <Navigations/>
           <section >
               <h2>ORDERS(<span>{orders}</span>)</h2>
               <div className="orders">
                   <div className="single-order">
                     
                        <div>
                            <img src={eventimage} alt="ticket image" />
                        </div>

                        <div className='desc'>
                            <p className='event-name'>THE OXYMORON OF KENNY BLAQ</p>
                            <p>
                                <span className='price'>₦10000</span>
                                <span className='location'>Lagos</span>
                            </p>
                            <p className='ticket'>
                            Regular Ticket “Kenny Blaq” *1
                            </p>
                            <p className='date'>
                            24/05/2024
                            </p>
                        </div>
                          
                     

                      <button>
                        More info
                      </button>
                      
                   </div>

               </div>
           </section>
           <Footer/>
        </>
     );
}
 
export default Orders;