import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();


  
    const [collection, setcollection] = useState({ username: "", email: "",password:"",confirm_password:"" });
  
    const handlechange = (e) => {
      const { name, value } = e.target;
      setcollection((prev) => ({
        ...prev, [name]: value
      }));
      
    }
  const handleSignUp = async(e) => {

    e.preventDefault();

    const{username,email,password,confirm_password}=collection;

    
  if (!username.trim()) {
    alert("Please enter your name.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

      
  if (!password.trim()) {
    alert("Please enter your password.");
    return;
  }
console.log(password);
console.log(confirm_password);
  if(password!==confirm_password){
    alert("please enter same password");
    return;
  }
   
    try{
      const response=await axios.post('http://localhost:5000/signup',collection);
          alert(response.data.msg);
          if(response.data.success){
           navigate ('/Login')
          }

    }
    catch(err){
      console.log (err);
    }

    navigate('/Login'); 
  };

  return (
    <div className='navbar'>
      <div className="login-container">
        <h2 className="form-title">Create New Account</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              onChange={handlechange}
              value={collection.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handlechange}
              value={collection.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handlechange}
              value={collection.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              className="form-control"
              placeholder="Confirm your password"
              onChange={handlechange}
              value={collection.confirm_password}
            />
          </div>
          <button type='button' className='loginbtn' style={{width:"100%",padding:"10px 15px",fontWeight:"bold"}} onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <div className="additional-options">
          <p>Already have an account?<a href='/Login'> Login </a></p>
        </div>
      </div>
    </div>
  );
}