import React, { useState } from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import { MdCancel } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import '../styles/adminNotification.css'
import NotificationModal from '../Components/admin-componenets/notificationAcceptModal';
const AdminNotifications = () => {
    const [isNotiModalOpen, setNotiModalOpen] = useState(false)
    return (  
        <>
        <AdminNavbar/>
         <div className="main-container">
            <AdminSidebar/>
            <div className="sub-container">
                <div className="admin-notifications">
                    <WithdrawalAlert/>
                    <WithdrawSucess/>
                </div>
            </div>  
        </div> 
        {isNotiModalOpen &&<NotificationModal/>} 
       </>
    );
}
 
export default AdminNotifications;



const WithdrawalAlert =()=>{
    return(
        <div className="single-notification">
            <div className="notification-date">
                <FaClockRotateLeft/> <span>1:00 PM at August 7, 2024</span>
            </div>
            <div className='desc'>
                <div>
                    <h3>
                        Ticket Purchased
                    </h3>
                    <p>Abdurrazzaq Abdulmuhsin has request a withdrawal of $2000 from his earnings</p>
                </div>
                <div>
                <MdCancel className='icon'/>
            </div>
            </div>
           
            <div className="buttons">
                {/* <button className='approve' onClick={setNotiModalOpen(!isNotiModalOpen)}> Approve </button> */}
                <button className='reject'> Ignore  </button>
            </div>        
        </div>
    )
}

const WithdrawSucess =()=>{
    return(
        <div className="single-notification">
            <div className="notification-date">
                <FaClockRotateLeft/> <span>1:00 PM at August 7, 2024</span>
            </div>
            <div className='desc'>
                <div>
                    <h3>
                        Ticket Purchased
                    </h3>
                    <p>Abdurrazzaq Abdulmuhsin has request a withdrawal of $2000 from his earnings</p>
                </div>

                <div>
                <MdCancel className='icon'/>
                </div>

            </div>
            
                    
        </div>
    )
}