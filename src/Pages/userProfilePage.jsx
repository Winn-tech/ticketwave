import React from 'react';
import Navigations from '../Components/Navigations/navigations';
import { LuUploadCloud } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import Footer from '../Components/footer';
import '../styles/userProfilePage.css'
import ProfilePic from '../images/profile-pic.jpg'
const UserProfilePage = () => {
    return ( 
        <>
          <Navigations/>
          <section className='profilePage'>
               <div className="header">

               </div>
               <div className='profile-image'>
                    <div>
                        <img src={ProfilePic} alt="user image" />
                    </div>
                    <p><LuUploadCloud/>  Upload Picture</p>
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

                     <div className="group">
                        <p className='label'>password</p>
                        <p className='detail'>
                           <span>**********</span>
                           <span><CiEdit className='icon'/></span>
                        </p>
                     </div>
               </div>
               <div className="withdraw">
                <div className="svg">
                  
            
                </div>
                   <p className='price'>₦500,000</p>
                   <p>Available balance</p>
                   <button>Withdraw</button>
               </div>
          </section>
          <Footer/>
        </>
     );
}
 
export default UserProfilePage;