import React, { useState } from 'react';
import '../styles/authPages.css'
import { AiOutlineMail } from "react-icons/ai";
import AuthImageSection from './authImageSection';
import { Link, useNavigate } from 'react-router-dom';
import { environment } from '../environment';
import axios from 'axios';
import {toast} from 'react-toastify';


const ForgetPassOne = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  
  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
      toast.error(message);
  };

  const SendEmail = async(e)=> {
    e.preventDefault();

    try {

      setLoading(true)

      const result = await axios.post(environment.appUrl + 'user/check-email', {
        email: email,
      });

      setLoading(false)


      console.log(result.data.success);

      if(result.data.success) {
        // notifySuccess(result.data.message)
        navigate('/forget-password/sent');
      }
      else {
        notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);

      }

  } catch (error) {
      setLoading(false)
      notifyError(JSON.stringify(error));
      console.error('There was an error posting the data!', error);
  }

  }


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
               
                <form onSubmit={SendEmail}>
                <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  
                  <Link to="/login" className="forgot-password">Return to Login</Link>
                 {/* <Link to={'/forget-password/sent'}> */}
                 <button className="login-button" disabled={loading} >Submit</button>
                 {/* </Link> */}
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
     );
}
 
export default ForgetPassOne;