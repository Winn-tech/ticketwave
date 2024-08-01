import React, { useState } from 'react';
import line from '../assets/line.png'
import LoginImages from '../images/auth/LoginImages.png'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import '../styles/authPages.css'
import AuthImageSection from './authImageSection';
const SignupPage = () => {
 const [user, setUser] = useState({FullName : ' ', email : '', password :'', confirmPass:'' })

  
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value})
    
  }
  const handleSubmit =(e) =>{
    e.preventDefault()
   //  const person = {firstName: }
   if(user.FullName && user.email && user.password && user.confirmPass !== ' ' ){
        console.log(user);  
   }
    else{
      console.log('Godwin check again lol');
      
    }

 }

    return (
      <div className="container">
        {/* <div className="image-section">
          <img src={LoginImages} alt="People enjoying at a party" />
        </div> */}
        <AuthImageSection className= "image-section"/>
        <div className="form-section">
           <div>
            <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
            <div className="form-container signup" >
                <div className='desc'>
                    <h2>Create your account</h2>
                    <p>
                      Discover and Book the Best Events Near You. 
                      {/* <span role="img" aria-label="party">🎉</span> */}
                      </p>
                     <div className='google'>
                       <FcGoogle className='google-icon'/> <span>Continue with Gogle</span>
                     </div>
                    <div className="divider">
                      <span><img src={line} alt="" /></span>
                      <span>OR</span>
                      <span><img src={line} alt="" /></span>
                    </div>

                    <form onSubmit={handleSubmit}>
                    
                        <div className="input-group">
                        <FaRegUser className='input-icon'/>
                        <input type="text" placeholder="Full name" name='fullName' onChange={handleChange}/>
                        </div>
                        <div className="input-group">
                        <AiOutlineMail className='input-icon'/>
                        <input type="email" placeholder="Email" name='email' onChange={handleChange}/>
                      </div>
                      <div className="input-group">
                        <CiLock className='input-icon'/>
                        <input type="password" placeholder="Password" name='password' onChange={handleChange}/>
                        <span className="icon"><IoEyeOffOutline/></span>
                      </div>
                    
                      <div className="input-group">
                        <CiLock className='input-icon'/>
                        <input type="password" placeholder="Confirm Password" name='conformPass' onChange={handleChange}/>
                        <span className="icon"><IoEyeOffOutline/></span>
                      </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <button type='submit' className="login-button">Sign In</button>
                        <div className='terms'>
                            <span><input type='checkbox'/></span>   <span><a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></span>  
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