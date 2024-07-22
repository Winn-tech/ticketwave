import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
import confirm from '../assets/confirm.svg'

const PasswordResetConfirmation = () => {
    return (
    <div className="container ">
        <div className="image-section">
            <img src={LoginImages} alt="People enjoying at a party" />
        </div>
        <div className="form-section">
            <div className='confirm'>
                <div className="icon">
                  <img src={confirm} alt="" />
                </div>
                <h2>Your password has been reset</h2>
                <p>Please Login in to your account</p>
                <button className="login-button">Go to Login</button>
            </div>
        </div>
    </div> 
     
      
    );
  };
  
  export default PasswordResetConfirmation;
  