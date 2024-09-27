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
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import {Bars} from 'react-loader-spinner'




const SignupPage = () => {
     const[password_show, setPasswordShow] = useState(false)
     const[confirm_show, setConfirmShow] = useState(false)
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name, setname] = useState('');
     const [lastN, setLastN] = useState('');
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
            first_name: name,
            last_name: lastN,
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


    const googleSignUp = async()=> {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const firstName = user?.displayName.slice(0, user?.displayName.indexOf(' '));
        const lastName = user?.displayName.slice(user?.displayName.indexOf(' ')+1, user?.displayName.length)

        
          try {
              setLoading(true)

              const result = await axios.post(environment.appUrl + 'register', {
                email: user?.email,
                password: user?.uid,
                first_name: firstName,
                last_name: lastName,
                password_confirmation: user?.uid
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
      } catch (error) {
        console.error("Error signing in with Google: ", error);
        notifyError(JSON.stringify(error));
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
                     <div className="google" onClick={googleSignUp}>
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
                      <input type="text" value={name} onChange={(e)=> setname(e.target.value)} required placeholder="First name" />
                    </div>
                    <div className="input-group">
                      <FaRegUser className='input-icon'/>
                      <input type="text" value={lastN} onChange={(e)=> setLastN(e.target.value)} required placeholder="last name" />
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
                    <button className="login-button" disabled={loading}>{loading ? <Bars color="white" height="16" /> : "Sign up" }</button>
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