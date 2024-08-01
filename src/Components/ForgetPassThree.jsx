import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import '../styles/authPages.css'
const ForgetPassThre = () => {
    return (
      <div className="container">
        <div className="image-section">
          <img src={LoginImages} alt="People enjoying at a party" />
        </div>
        <div className="form-section">
            <div>
              <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
              </div>
            <div className="form-container">
              
              <div className='desc'>
                <h3>Welcome Back</h3>
                <p>Get Tickets to the Hottest Events in Town <span role="img" aria-label="party">🎉</span></p>
               
                <form>
                 <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type="password" placeholder="Password" />
                    <span className="icon"><IoEyeOffOutline/></span>
                  </div>
                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type="password" placeholder="Password" />
                    <span className="icon"><IoEyeOffOutline/></span>
                  </div>
                  
                  <p className="login-button">Reset Password</p>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default ForgetPassThre;