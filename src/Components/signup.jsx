import React, { useEffect, useRef, useState } from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import axios from 'axios';
import { environment } from '../environment';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [password_show, setPasswordShow] = useState(false);
  const [confirm_show, setConfirmShow] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    console.log(environment.appUrl);
  })

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
      toast.error(message);
  };

  const handleSignUp = async(event)=> {
      event.preventDefault(); 

      try {

        setLoading(true)

        const result = await axios.post(environment.appUrl + 'register', {
          fullname: name,
          email: email,
          password: password,
          password_confirmation: confirm_password,
        });

        setLoading(false)

        if(result.data.success) {
          notifySuccess(result.data.message)
          navigate('/login');
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
                    <h2>Create your account</h2>
                    <p>Discover and Book the Best Events Near You. <span role="img" aria-label="party">🎉</span></p>
                    <button className="google-button">Continue with Google</button>
                    <div className="divider">OR</div>
                    <form onSubmit={handleSignUp}>
                        <div className="input-group">
                        <FaRegUser className='input-icon'/>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required  placeholder="Full name" />
                      </div>
                        <div className="input-group">
                        <AiOutlineMail className='input-icon'/>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="Email" />
                      </div>
                      <div className="input-group">
                        <CiLock className='input-icon'/>
                        <input type={password_show? "text" : "password"} value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder="Password" />
                        {password_show ? <span className="icon" onClick={()=> {setPasswordShow(!password_show)}}><IoEyeOutline/></span> :<span className="icon" onClick={()=> {setPasswordShow(!password_show)}}><IoEyeOffOutline/></span>}
                      </div>
                    
                      <div className="input-group">
                        <CiLock className='input-icon'/>
                        <input type={confirm_show?"text":"password"} value={confirm_password} onChange={(e)=> setConfirmPassword(e.target.value)} required placeholder="Confirm Password" />
                        {confirm_show ? <span className="icon" onClick={()=> {setConfirmShow(!confirm_show)}}><IoEyeOutline/></span>: <span className="icon" onClick={()=> {setConfirmShow(!confirm_show)}}><IoEyeOffOutline/></span>}
                      </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <button disabled={loading} className="login-button">Sign Up</button>
                        <div className='terms'>
                            <input type='checkbox'/> agree to Farm  <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </div>
      </div>
    );
  };
  
  export default SignupPage;