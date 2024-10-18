import Reac,{useState} from 'react';
import '../styles/admin-auth.css'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { environment } from '../environment';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AdminForgetPassword = () => {
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

    
    const SendEmail = async(e)=> {
        e.preventDefault();
    
        try {
    
          setLoading(true)
    
          const result = await axios.post(environment.appUrl + 'user/check-email', {
            email: email,
          });
    
          setLoading(false)
    
    
          console.log(result.data.success);
    
          if(result.data.success) {
            // notifySuccess(result.data.message)
            navigate('/admin/reset');
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
                <h3>Forget Password</h3>
                <p>Enter your email address to recover.</p>
                <form action="" onSubmit={SendEmail}>
                    <div className="input-con">
                       
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address'/>    
                    </div>

                    <button className='btt'>Reset Password</button>
                    <p>Don't have an account? <span><Link to='/admin/auth' style={{textDecoration: 'none', color: 'inherit',}}>Login </Link></span></p>
                    
                </form>
               
           </div>
        </div>
     );
}
 
export default AdminForgetPassword;