import React, { useEffect, useState } from 'react';
import Navigations from '../Components/Navigations/navigations';
import { LuUploadCloud } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import Footer from '../Components/footer';
import '../styles/userProfilePage.css'
import ProfilePic from '../images/profile-pic.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Bars} from 'react-loader-spinner'



const UserProfilePage = () => {
   const userInfo = JSON.parse(localStorage.UserInfo);
   const [loading, setLoading] = useState(false);
   const [info, setInfo] = useState([]);
   const navigate = useNavigate();

   
   const notifySuccess = (message) => {
      toast.success(message);
   };

   const notifyError = (message) => {
         toast.error(message);
   };
   
   useEffect(() => {
      const getUserInfo = async () => {
        try {
          setLoading(true);
          const result = await axios.get(environment.appUrl + 'user-details', {
            headers: {
              Authorization: `Bearer ${userInfo.token}`
            }
          });
          setLoading(false);

          console.log(result.data.user);
      
          setInfo(result.data.user)
        } catch (error) {
          setLoading(false);
          notifyError(JSON.stringify(error));
          setInfo([]);
        }
      };
  
      getUserInfo();
    }, [userInfo.token]);

    function formatMoney(amount, currencySymbol = '') {
      if (amount === undefined || amount === null || isNaN(amount)) {
         console.error('Invalid amount:', amount);
         return '';
     }
 
     const amountStr = typeof amount !== 'string' ? amount.toString() : amount;
      
      const [integerPart, decimalPart] = amountStr.split('.');
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return decimalPart !== undefined
          ? `${currencySymbol}${formattedIntegerPart}.${decimalPart}`
          : `${currencySymbol}${formattedIntegerPart}`;
   }

    const {fullname, email} = info
     if(loading === true){
      return(
       <>
           <Navigations/>
          <section className='mainLoading'>
             <Bars color="#66bb6a" height="40" /> 
          </section>
       </>
      )
     }
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
                        <p className='detail'>{fullname}</p>
                     </div>

                     <div className="group">
                        <p className='label'>Email</p>
                        <p className='detail'>{email}</p>
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
                   <p className='price'>{formatMoney(info.account_balance, '₦')}</p>
                   <p>Available balance</p>
                   <button>Withdraw</button>
               </div>
               
          </section>
          <Footer/>
        </>
     );
}
 
export default UserProfilePage;