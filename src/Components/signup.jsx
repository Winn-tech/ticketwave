import React, {useState} from 'react';
import '../styles/authPages.css'
import line from '../assets/line.png'
import AuthImageSection from './authImageSection';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
const SignupPage = () => {
     const[password_show, setPasswordShow] = useState(false)
    return (
      <div className="auth-container">
        
        <AuthImageSection className= "image-section"/>
        <div className="form-section">
           <div>
            <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
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
                    <form>
                    
                    <div className="input-group">
                    <FaRegUser className='input-icon'/>
                    <input type="email" placeholder="Full name" />
                  </div>
                    <div className="input-group">
                    <AiOutlineMail className='input-icon'/>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type={password_show? "text" : "password"} placeholder="Password" />
                    <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                      {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>

                  </div>
                
                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type={password_show? "text" : "password"} placeholder="Confirm Password" />
                    <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                      {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>

                    
                  </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <p className="login-button">Sign In</p>
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