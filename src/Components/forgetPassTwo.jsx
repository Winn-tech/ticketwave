import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import authAvatar from '../assets/authAvatar.png'

import { AiOutlineMail } from "react-icons/ai";


const ForgetPassTwo = () => {
    return ( 
        <div className="container ">
        <div className="image-section">
          <img src={LoginImages} alt="People enjoying at a party" />
        </div>
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