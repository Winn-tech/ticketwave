import React, { useEffect, useState } from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import line from '../assets/line.png'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import axios from 'axios';
import { environment } from '../environment';
import {toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import AuthImageSection from './authImageSection';
<<<<<<< HEAD
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
=======
import {Bars} from 'react-loader-spinner'
>>>>>>> 49697a5c87e9f3c3586b6c0782cd862a73126496



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

          navigate('/', { replace: true });

          localStorage.setItem('UserInfo', JSON.stringify(result.data))
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

  async function verifyEmail(email, token) {
    try {

        setLoading(true)

        const result = await axios.post(environment.appUrl + 'verify-email', {
          email: email,
          token: token,
        });

        setLoading(false)

        if(result.data.success) {
          notifySuccess(result.data.message)
          console.log(result.data);
        }
        else {
          notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
        }

    } catch (error) {
        setLoading(false)
        notifyError(JSON.stringify(error));
    } 
  }

  useEffect(()=> {
    if(localStorage.UserInfo !== null || localStorage.UserInfo !== undefined) {
      localStorage.removeItem('UserInfo');
    }

    const url = window.location.href;

    const parsedUrl = new URL(url);

    const params = new URLSearchParams(parsedUrl.search);

    const email = params.get('email');
    const token = params.get('token');



    if(email !== null) {
      verifyEmail(email, token)
    }

  }, [])

  
  const googleSignIn = async()=> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

        try {

          setLoading(true)
  
          const result = await axios.post(environment.appUrl + 'login', {
            email: user?.email,
            password: user?.uid,
          });
  
          setLoading(false)
  
          if(result.data.success) {
            notifySuccess(result.data.message)
  
            navigate('/', { replace: true });
            localStorage.setItem('UserInfo', JSON.stringify(result.data))
          }
          else {
            notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
          }
  
      } catch (error) {
          setLoading(false)
          notifyError(JSON.stringify(error));
          console.error('There was an error posting the data!', error);
      }
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      notifyError(JSON.stringify(error));
    }

  }


    return (
      <div className="auth-container">
        <AuthImageSection/>
        <div className="form-section">
            <div>
              <div className="header">
                <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
              </div>
            <div className="form-container">
              
              <div className='desc' >
                <h2>Welcome Back</h2>
                <p>Get Tickets to the Hottest Events in Town<span role="img" aria-label="party">🎉</span></p>
                <div className="google" onClick={googleSignIn}>
                         <FcGoogle className='google-icon'/> Continue with Google
                </div>
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
                    <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                      {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>

                  </div>

                  <Link to='/forget-password/email' className="forgot-password">Forgot password?</Link>
                  <button className='login-button' disabled={loading}>{loading ? <Bars color="white" height="16" /> : "Submit" }</button>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default SigninPage;