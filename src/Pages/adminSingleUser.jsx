import React from 'react';
import AdminNavbar from '../Components/admin-componenets/AdminNavbar';
import AdminSidebar from '../Components/admin-componenets/sidebar';
import profilePic from '../images/profile-pic.jpg'
import '../styles/adminUsers.css'

const AdminSingleUser = () => {
    return (  
        <>
        <AdminNavbar/>
         <div className="main-container">
            <AdminSidebar/>
            <div className="sub-container">
                <div className="heading">
                    <h3>Profile</h3>
                </div>
               
                <div className='profile-image'>
                    <img src={profilePic} alt="user image" />
                </div>
                    
              
               <div className='user-details'>
                     <div className="group">
                        <p className='label'>Full name</p>
                        <p className='detail'>Nwuizu Oluchukwu Godwin</p>
                     </div>

                     <div className="group">
                        <p className='label'>Email</p>
                        <p className='detail'>abdurrazzaqabdulmuhsin7@gmail.com</p>
                     </div> 
               </div>

               <button className="send-email"> Message User via Mail</button>

            </div>
        </div> 
       </>
    );
}
 
export default AdminSingleUser;