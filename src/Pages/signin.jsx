import React from 'react';
import LoginImages from '../images/auth/LoginImages.png'
const SigninPage = () => {
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
                <h2>Welcome Back</h2>
                <p>Get Tickets to the Hottest Events in Town <span role="img" aria-label="party">🎉</span></p>
                <button className="google-button">Continue with Google</button>
                <div className="divider">OR</div>
                <form>
                  <div className="input-group">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-group">
                    <input type="password" placeholder="Password" />
                    <span className="icon">🔒</span>
                  </div>
                  <a href="#" className="forgot-password">Forgot password?</a>
                  <button type="submit" className="login-button">Sign In</button>
                </form>
              </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default SigninPage;