import Reac,{useState} from 'react';
import '../styles/admin-auth.css'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const AdminForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_show, setPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);
    

    return ( 
        <div className="admin-auth">
           <div>
                <h3>Forget Password</h3>
                <p>Enter your email address to recover.</p>
                <form action="">
                    <div className="input-con">
                       
                    <input type="text" placeholder='Email address'/>    
                    </div>
                    
                </form>
               
                <button className='btt'>Login</button>
                <p>Don't have an account? <span>Signup</span></p>
           </div>
        </div>
     );
}
 
export default AdminForgetPassword;