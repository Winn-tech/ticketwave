import React, { useEffect, useState } from 'react';
import LoginImages from '../images/auth/LoginImages.png'
// import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import '../styles/authPages.css'
import AuthImageSection from './authImageSection';
import axios from 'axios';
import { environment } from '../environment';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';




const ForgetPassThre = () => {
  const[password_show, setPasswordShow] = useState(false)
  const[confirm_show, setConfirmShow] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setconfirm] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(()=> {

    let url = window.location.href;
    const queryString = url.split('?')[1];

    // Convert the query string into a URLSearchParams object
    const params = new URLSearchParams(queryString);

    const encodedEmail = params.get('email');

    if(encodedEmail) {
      const actualEmail = decodeURIComponent(encodedEmail);

      setEmail(actualEmail);

      console.log(actualEmail)
    }else {
      navigate('/forget-password/email')
    }





  }, [])


  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
      toast.error(message);
  };



  const changePassword = async(event)=> {
    event.preventDefault(); 

    try {

      setLoading(true)

      const result = await axios.post(environment.appUrl + 'user/change-password', {
        email: email,
        password: password,
        password_confirmation: confirm,
      });

      setLoading(false)

      console.log(result.data);

      if(result.data.success) {
        notifySuccess(result.data.message)

        navigate('/login');
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
      <div className="auth-container">
        {/* <div className="image-section">
          <img src={LoginImages} alt="People enjoying at a party" />
        </div> */}
        <AuthImageSection/>
        <div className="form-section">
            <div>
              <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
              </div>
            <div className="form-container">
              
              <div className='desc'>
                <h3>Welcome Back</h3>
                <p>Get Tickets to the Hottest Events in Town <span role="img" aria-label="party">🎉</span></p>
               
                <form onSubmit={changePassword}>
                  
                <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input required value={password} onChange={(e)=> setPassword(e.target.value)} type={password_show? "text" : "password"} placeholder="Password" />
                    <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                      {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>

                  </div>
                
                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input required value={confirm} onChange={(e)=> setconfirm(e.target.value)} type={confirm_show? "text" : "password"} placeholder="Confirm Password" />
                    <span className="icon" onClick={() => setConfirmShow(!confirm_show)}>
                      {confirm_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>    
                  </div>
                  
                  <button disabled={loading} className="login-button">Reset Password</button>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default ForgetPassThre;

