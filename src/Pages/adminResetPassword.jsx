import Reac,{useState} from 'react';
import '../styles/admin-auth.css'
import adminPng from '../assets/authAvatar.png'
import { Link } from 'react-router-dom';

const AdminResetPass = () => {
    
    const [loading, setLoading] = useState(false);
    

    return ( 
        <div className="admin-auth">
           <div>
                <h3>Forget Password</h3>
                <article>
                    <p>We sent a password reset link to kel....@gmail.com. Click on the link in your email to reset your password.</p> 
            
                    <center>
                       <img src={adminPng} alt="avatar" />
                    </center>
                </article>
                
            <Link to="/admin/auth" style={{ textDecoration: 'none', color: 'inherit' }}><button>Back to Login</button></Link>
           </div>
        </div>
     );
}
 
export default AdminResetPass;