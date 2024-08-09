import React from 'react';
import Navigations from '../Components/Navigations/navigations';
import { MdCancel } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import '../styles/notifications.css'
import Footer from '../Components/footer';
const NotificationPage = () => {
    return (  
        <>
           <Navigations/>
           <div className="notifications">
           <h3>NOTIFICATIONS (<span>4</span>)</h3>
              <div className="notifications-container">
                <SingleNotification/>
                <SingleNotification/>
                <SingleNotification/>
              </div>
           </div>
           <Footer/>
        </>
    );
}
 
export default NotificationPage;

const SingleNotification = ()=>{
    return(
        <div className="single-notification">
                    <div className='desc'>
                        <h3>
                            Ticket Purchased
                        </h3>
                        <p>Abdurrazzaq Abdulmuhsin has successfully purchase “Kenny Blaq Oxymoron Regular Ticket <span>1</span> for a sum of #10,000</p>
                    </div>
                    <div>
                        <MdCancel className='icon'/>
                    </div>
                    <div className="date">
                          <FaClockRotateLeft/> <span>1:00 PM at August 7, 2024</span>
                    </div>
                </div>
    )
}