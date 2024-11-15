import React, { useState } from 'react'
import {Bars} from 'react-loader-spinner'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from 'axios'; 
import { environment } from '../environment';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/events-attendance.css"
const EventAttendance = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [UniqueCode, setUniquecode] = useState('')
    const navigate = useNavigate();
    const [password_show, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const notifySuccess = (message) => {
        toast.success(message);
      };
    
      const notifyError = (message) => {
          toast.error(message);
      };

    const loginFunc = async(event)=> {
        event.preventDefault(); 
  
        try {
  
          setLoading(true)
  
          const result = await axios.post(environment.appUrl + 'event-login', {
            email: email,
            password: password,
            event_code: UniqueCode,
          });
  
          setLoading(false)
         
          const eventTitle =  result.data.event.event_title
         localStorage.setItem("eventTitle", JSON.stringify(eventTitle))
          
          
          const eventId = result.data.event.id
         
          localStorage.setItem('eventId', JSON.stringify(eventId))
          
          if(result.data.success) {
            notifySuccess(result.data.message)
  
            navigate('/events-attendance', { replace: true });
          
            localStorage.setItem('UserInfo', JSON.stringify(result.data))
            console.log(result.data);
            
          }
          else {
            notifyError(result.data.errors ? JSON.stringify(result.data.errors) : result.data.message);
            // console.log("hello",result.data);
          }
  
      } catch (error) {
          setLoading(false)
          notifyError(JSON.stringify(error));
          console.error('There was an error posting the data!', error);
      }
  
    }

  return(
      <> 
       <div className="navbar">
        <div className='logo'>Logo</div>
        <div> something</div>
       </div>
        <div className="admin-auth eventsignin">
           <div>
                <h3>Sign in to TicketWave</h3>
                <p>Welcome back! Please enter your details.</p>
                <form onSubmit={loginFunc}>
                    <div className="input-cont">
                    <label>Email</label>
                        <input 
                            type="text" 
                            placeholder='Email address' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-cont">
                        <label>Password </label>
                        <input 
                            type={password_show ? "text" : "password"} 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='Password'
                        />
                        <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                            {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </span>
                    </div>

                    <div className="input-cont">
                        <label>Event Unique Code</label>
                        <input 
                            type="text" 
                            placeholder=' eg: tickname0003675gbf' 
                            value={UniqueCode} 
                            onChange={(e) => setUniquecode(e.target.value)} 
                        />
                    </div>
                    
                    <button className='login-button' type="submit" disabled={loading}>
                    {loading ? <Bars color="white" height="16" /> : "Login" }
                    </button>
                </form>
           </div>
        </div>
      </>
  )   
}
export default EventAttendance