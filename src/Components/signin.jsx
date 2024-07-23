import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import line from '../assets/line.png'
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
const SigninPage = () => {
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
              
              <div className='desc' >
                <h2>Welcome Back</h2>
                <p>Get Tickets to the Hottest Events in Town <span role="img" aria-label="party">🎉</span></p>
                <button className="google-button">Continue with Google</button>
                <div className="divider">
                   <span><img src={line} alt="" /></span>
                   <span>OR</span>
                   <span><img src={line} alt="" /></span>
                </div>
                <form>
                  <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" placeholder="Email" />
                  </div>

                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type="password" placeholder="Password" />
                    <span className="icon"><IoEyeOffOutline/></span>
                  </div>

                  <a href="#" className="forgot-password">Forgot password?</a>
                  <p className='login-button'>Sign In</p>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default SigninPage;