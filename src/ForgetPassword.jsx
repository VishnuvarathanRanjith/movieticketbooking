import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    alert("Password changed successfully!!");
    navigate('/Login'); 
  };

  return (
    <div className='navbar'>
      <div className="login-container">
        <h2 className="form-title">Forgot Password</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
          <label>Password</label>
          <input
           type='New-password'
           placeholder='enter your new-password'/>
           </div>
          <button className="loginbtn" style={{width:"100%",padding:"10px"}} onClick={handleResetPassword}>
            Reset Password
          </button>
          
        </form>
        <div className="additional-options">
          <p>Remember your password? <a href="/Login">Login</a></p>
        </div>
      </div>
    </div>
  );
}