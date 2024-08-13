import React from 'react';
import AuthImageSection from './authImageSection';
import authAvatar from '../assets/authAvatar.png'
import '../styles/authPages.css'


import { AiOutlineMail } from "react-icons/ai";


const ForgetPassTwo = () => {
    return ( 
        <div className="auth-container ">
         <AuthImageSection/>
        <div className="form-section">
            <div>
              <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
              </div>
            <div className="form-container seccond-type">
              
              <div className='desc'>
                <h2>Reset Password</h2>
                <p>Reset link has been sent to your email. <span role="img" aria-label="party">🎉</span></p>
               <div>
                <img src={authAvatar} alt="" />
               </div>
                
              </div>
          </div>
            </div>
        </div>
      </div>
     );
}
 
export default ForgetPassTwo;