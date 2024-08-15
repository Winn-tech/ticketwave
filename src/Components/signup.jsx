import React, {useState, useEffect} from 'react';
import '../styles/authPages.css'
import line from '../assets/line.png'
import AuthImageSection from './authImageSection';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import { environment } from '../environment';



const SignupPage = () => {
     const[password_show, setPasswordShow] = useState(false)
     const[confirm_show, setConfirmShow] = useState(false)
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name, setname] = useState('');
     const [confirm, setconfirm] = useState('');
     const navigate = useNavigate();
     const [loading, setLoading] = useState(false);
   

     const notifySuccess = (message) => {
      toast.success(message);
    };
  
    const notifyError = (message) => {
        toast.error(message);
    };
  
  
    const handleRegister = async(event)=> {
        event.preventDefault(); 
  
        try {
  
          setLoading(true)

          console.log(email, 'email')
          
  
          const result = await axios.post(environment.appUrl + 'register', {
            email: email,
            password: password,
            fullname: name,
            password_confirmation: confirm
          });
  
          setLoading(false)
  
          if(result.data.success) {
            notifySuccess(result.data.message)
            navigate('/login');
          }else {
            notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
          }
  
      } catch (error) {
          setLoading(false)
          
        notifyError(JSON.stringify(error));
          console.error('There was an error posting the data!', error);
      }
  
    }


    
    useEffect(()=> {
      if(localStorage.UserInfo !== null || localStorage.UserInfo !== undefined) {
        localStorage.removeItem('UserInfo');
      }
    }, [])

    return (
      <div className="auth-container">
        
        <AuthImageSection className= "image-section"/>
        <div className="form-section">
           <div>
            <div className="header">
                <p>Have an account? <Link to={'/login'}>Sign In</Link> </p>
            </div>
            <div className="form-container" >
                <div className='desc'>
                    <h2>Create your account</h2>
                    <p>Discover and Book the Best Events Near You. <span role="img" aria-label="party">🎉</span></p>
                     <div className="google">
                         <FcGoogle className='google-icon'/> Continue with Google
                     </div>
                   
                    <div className="divider">
                      <span><img src={line} alt="" /></span>
                      <span>OR</span>
                      <span><img src={line} alt="" /></span>
                    </div>
                    <form onSubmit={handleRegister}>
                    
                    <div className="input-group">
                    <FaRegUser className='input-icon'/>
                    <input type="text" value={name} onChange={(e)=> setname(e.target.value)} required placeholder="Full name" />
                  </div>
                    <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="Email" />
                  </div>
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

                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button className="login-button" disabled={loading}>Sign Up</button>
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