import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import { AiOutlineMail } from "react-icons/ai";


const ForgetPassOne = () => {
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
                <p>Please enter your email to reset your password <span role="img" aria-label="party">🎉</span></p>
               
                <form>
                <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" placeholder="Email" />
                  </div>
                  
                  <a href="#" className="forgot-password">Return to Login</a>
                  <p className="login-button">Submit</p>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
     );
}
 
export default ForgetPassOne;