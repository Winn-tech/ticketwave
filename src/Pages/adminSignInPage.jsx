import Reac,{useState} from 'react';
import '../styles/admin-auth.css'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_show, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);
    

    return ( 
        <div className="admin-auth">
           <div>
                <h3>Sign in to TicketWave</h3>
                <p>Welcome back! Please enter your details.</p>
                <form action="">
                    <div className="input-con">
                       
                    <input type="text" placeholder='Email address'/>    
                    </div>
                    <div className="input-con">
                   
                    <input type={password_show? "text" : "password"} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
                    <span className="icon" onClick={() => setPasswordShow(!password_show)}>
                      {password_show ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </span>

                    </div>
                </form>
                <p className='alt'>Forget Password</p>
                <button>Login</button>
                <p>Don't have an account? <span>Signup</span></p>
           </div>
        </div>
     );
}
 
export default AdminSignIn;