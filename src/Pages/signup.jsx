import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
const SignupPage = () => {
    return (
      <div className="container">
        <div className="image-section">
          <img src={LoginImages} alt="People enjoying at a party" />
        </div>
        <div className="form-section">
           <div>
            <div className="header">
                <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
            <div className="form-container">
                <div>
                    <h2>Create your account</h2>
                    <p>Discover and Book the Best Events Near You. <span role="img" aria-label="party">🎉</span></p>
                    <button className="google-button">Continue with Google</button>
                    <div className="divider">OR</div>
                    <form>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" />
                        <span className="icon">🔒</span>
                    </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <button type="submit" className="login-button">Sign In</button>
                    <div className='terms'>
                        <p>I agree to Farm  <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a> </p>
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