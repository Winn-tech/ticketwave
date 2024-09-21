import React, { useEffect, useState } from 'react';
import '../styles/admin-auth.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from 'axios'; // Import axios for the request
import { environment } from '../environment';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_show, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const notifySuccess = (message) => {
      toast.success(message);
    };
  
    const notifyError = (message) => {
        toast.error(message);
    };


    useEffect(()=> {
      if(localStorage.UserInfo !== null || localStorage.UserInfo !== undefined) {
        localStorage.removeItem('UserInfo');
      }
    }, [])
  
    const loginFunc = async (e) => {
        e.preventDefault(); // Prevent page reload

        setLoading(true); // Show loading state

        try {
          const result = await axios.post(environment.appUrl + 'login', {
                email: email,
                password: password
            });


            setLoading(false)

            if(result.data.success && result.data.user.admin) {
              notifySuccess(result.data.message)
    
              navigate('/admin/admin-dashboard', { replace: true });
    
              localStorage.setItem('UserInfo', JSON.stringify(result.data))
            }else if (!result.data.user.admin) {
              notifyError('You are not an Admin');
              navigate('/login', { replace: true });
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
        <div className="admin-auth">
           <div>
                <h3>Sign in to TicketWave</h3>
                <p>Welcome back! Please enter your details.</p>
                <form onSubmit={loginFunc}>
                    <div className="input-con">
                        <input 
                            type="text" 
                            placeholder='Email address' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-con">
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
                    <p className='alt'> <Link to='/admin/forget' style={{textDecoration: 'none', color: 'inherit',}}>Forget Password</Link></p>
                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
           </div>
        </div>
    );
}

export default AdminSignIn;
