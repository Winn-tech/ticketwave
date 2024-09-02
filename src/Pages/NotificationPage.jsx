import React, {useState, useEffect} from 'react';
import Navigations from '../Components/Navigations/navigations';
import { MdCancel } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import '../styles/notifications.css'
import Footer from '../Components/footer';
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';



const NotificationPage = () => {
    
    const userInfo = JSON.parse(localStorage.UserInfo);
    const [loading, setLoading] = useState(false);
    const [notifications, setNotification] = useState([]);
    const navigate = useNavigate();

    
    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };
    

    useEffect(() => {
        const getNotifications = async () => {
          try {
            setLoading(true);
            const result = await axios.get(environment.appUrl + 'notifications', {
                headers: {
                  Authorization: `Bearer ${userInfo.token}`,
                  ContentType: 'application/json',
                  Accept: 'application/json',
                }
              });
              

            
            setLoading(false);

            console.log(result.data.notifications);
        
            setNotification(result.data.notifications)
            
          } catch (error) {
            setLoading(false);
            notifyError(JSON.stringify(error));
            setNotification([]);
          }
        };
    
        getNotifications();
      }, [userInfo.token]);
    return (  
        <>
           <Navigations/>
           <div className="notifications">
           <h3>NOTIFICATIONS (<span>{notifications.length}</span>)</h3>
              <div className="notifications-container">
                {notifications.length > 0 && notifications.map((notification, idx)=> (
                    <SingleNotification userInfo={userInfo} notifySuccess={notifySuccess} notifyError={notifyError} notification={notification} idx={idx} setLoading={setLoading} setNotification={setNotification} notifications={notifications} />
                ))}
                {notifications.length == 0 && <h1>No notification</h1>}
              </div>
           </div>
           <Footer/>
        </>
    );
}
 
export default NotificationPage;


const SingleNotification = ({notification, userInfo, notifySuccess, idx, notifyError ,setNotification, notifications, setLoading})=>{

    const formatDate = (main)=> {
        // const isoDateString = "2024-08-20T18:01:54.000000Z";
        const date = new Date(main);

        // Format the time
        let hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Format the date
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"];
        const day = date.getUTCDate();
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();

        // Combine into the final string
        const formattedDate = `${hours}:${minutes < 10 ? '0'+minutes : minutes} ${ampm} at ${month} ${day}, ${year}`;

        return formattedDate;
        console.log(formattedDate);

    }



     
    const removeItem = async(id)=> {
        try {
            setLoading(true)
            const result = await axios.delete(environment.appUrl + 'notifications/'+id, {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              }
            });
            setLoading(false)
            if(result.data.success) {
                // notifySuccess(result.data.message)
                setNotification(notifications.filter((not)=> not.id !== id));

                // navigate(0);
            }
            else {
                notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
            }
          } catch (error) {
            setLoading(false)
            notifyError(JSON.stringify(error));
          }

    }

    return(
        <div className="single-notification" key={idx}>
                    <div className='desc'>
                        <h3>
                            {notification.title}
                        </h3>
                        <p>{notification.description}</p>
                        {/* <p>Abdurrazzaq Abdulmuhsin has successfully purchase “Kenny Blaq Oxymoron Regular Ticket <span>1</span> for a sum of #10,000</p> */}
                    </div>
                    <div>
                        <MdCancel onClick={()=> removeItem(notification.id)} className='icon'/>
                    </div>
                    <div className="date">
                          <FaClockRotateLeft/> <span>{formatDate(notification.created_at)}</span>
                    </div>
                </div>
    )
}