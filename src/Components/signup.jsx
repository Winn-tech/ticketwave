import React from 'react';
import '../styles/authPages.css'
import AuthImageSection from './authImageSection';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
const SignupPage = () => {
    return (
      <div className="container">
        
        <AuthImageSection className= "image-section"/>
        <div className="form-section">
           <div>
            <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
            <div className="form-container signup" >
                <div className='desc'>
                    <h2>Create your account</h2>
                    <p>Discover and Book the Best Events Near You. <span role="img" aria-label="party">🎉</span></p>
                    <button className="google-button">Continue with Google</button>
                    <div className="divider">OR</div>
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
                    <input type="password" placeholder="Password" />
                    <span className="icon"><IoEyeOffOutline/></span>
                  </div>
                
                  <div className="input-group">
                    <CiLock className='input-icon'/>
                    <input type="password" placeholder="Confirm Password" />
                    <span className="icon"><IoEyeOffOutline/></span>
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