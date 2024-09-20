import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { environment } from '../environment';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import '../styles/admin-auth.css';

const AdminForgetPasswordMain = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Extract email from the URL query string
  useEffect(() => {
    let url = window.location.href;
    const queryString = url.split('?')[1];

    // Convert the query string into a URLSearchParams object
    const params = new URLSearchParams(queryString);

    const encodedEmail = params.get('email');

    if (encodedEmail) {
      const actualEmail = decodeURIComponent(encodedEmail);
      setEmail(actualEmail);
    } else {
      // Redirect if email is missing in the query string
      navigate('/admin/forget');
    }
  }, [navigate]);

  const notifySuccess = (message) => {
    toast.success(message);
  };

  const notifyError = (message) => {
    toast.error(message);
  };

  const handlePasswordReset = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      notifyError('Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${environment.appUrl}user/change-password`, {
        email: email,
        password: newPassword,
        password_confirmation: confirmPassword,
      });
      setLoading(false);

      if (response.data.success) {
        notifySuccess(response.data.message);
        navigate('/admin/auth');
      } else {
        notifyError(response.data.errors ? JSON.stringify(response.data.errors) : response.data.message);
      }
    } catch (error) {
      setLoading(false);
      notifyError('There was an error resetting the password');
      console.error('Error:', error.response || error);
    }
  };

  return (
    <div className="admin-auth">
      <div>
        <h3>Reset Password</h3>
        <p>Enter your email, new password, and confirm it.</p>
        <form onSubmit={handlePasswordReset}>

          {/* New Password Input */}
          <div className="input-con">
            <input 
              type={newPasswordShow ? "text" : "password"} 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} 
              placeholder='New Password'
              required
            />
            <span className="icon" onClick={() => setNewPasswordShow(!newPasswordShow)}>
              {newPasswordShow ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="input-con">
            <input 
              type={confirmShow ? "text" : "password"} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder='Confirm Password'
              required
            />
            <span className="icon" onClick={() => setConfirmShow(!confirmShow)}>
              {confirmShow ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btt" disabled={loading}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
        
        {/* Redirect to Login */}
        <p>
          Don't have an account?{' '}
          <span>
            <Link to="/admin/auth" style={{ textDecoration: 'none', color: 'inherit' }}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminForgetPasswordMain;
