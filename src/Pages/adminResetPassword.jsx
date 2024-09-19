import Reac,{useState} from 'react';
import '../styles/admin-auth.css'
import adminPng from '../assets/authAvatar.png'
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
                <button>Reset Password</button>
           </div>
        </div>
     );
}
 
export default AdminResetPass;