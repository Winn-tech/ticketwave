import React, { useState } from 'react';
import '../styles/authPages.css'
import { AiOutlineMail } from "react-icons/ai";
import AuthImageSection from './authImageSection';
import { Link } from 'react-router-dom';

const ForgetPassOne = () => {
  const [email, setEmail] = useState("")
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
                <p>Please enter your email to reset your password <span role="img" aria-label="party">🎉</span></p>
               
                <form>
                <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  
                  <a href="#" className="forgot-password">Return to Login</a>
                 <Link to={'/forget-password/reset'}>
                 <button className="login-button" disabled={!email}>Submit</button>
                 </Link>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
     );
}
 
export default ForgetPassOne;