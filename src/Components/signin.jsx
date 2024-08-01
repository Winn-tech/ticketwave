import React, { useEffect, useState } from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import line from '../assets/line.png'
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import axios from 'axios';
import { environment } from '../environment';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AuthImageSection from './authImageSection';


const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_show, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
      toast.error(message);
  };


  const handleLogin = async(event)=> {
      event.preventDefault(); 

      try {

        setLoading(true)

        const result = await axios.post(environment.appUrl + 'login', {
          email: email,
          password: password,
        });

        setLoading(false)

        if(result.data.success) {
          notifySuccess(result.data.message)
          navigate('/');
        }else {
          notifyError(JSON.stringify(result.data.errors));
        }

    } catch (error) {
        setLoading(false)
        console.error('There was an error posting the data!', error);
    }

  }



    return (
      <div className="container">
        <AuthImageSection/>
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
                <form onSubmit={handleLogin}>
                  <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="Email" />
                  </div>

                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type={password_show? "text" : "password"} value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder="Password" />
                    {password_show ? <span className="icon" onClick={()=> {setPasswordShow(!password_show)}}><IoEyeOutline/></span> :<span className="icon" onClick={()=> {setPasswordShow(!password_show)}}><IoEyeOffOutline/></span>}
                  </div>

                  <a href="#" className="forgot-password">Forgot password?</a>
                  <button className='login-button' disabled={loading}>Sign In</button>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default SigninPage;