import React from 'react'
import "./css/login.css"
import {Link} from "react-router-dom"
import { useAuth } from '../context/authContext'
import { loginUser } from '../services/authServices'
import { useNavigate,useLocation } from "react-router-dom";
import { USER_EMAIL, USER_PASSWORD } from '../constant/authConstant';
import "./css/auth.css"

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate(location.state.from.pathname,{replace:true});
  }
  return (
    <>
    <div className="auth-containe">
      <div className="auth-head">
        <div className="auth-head-img">
        <img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className="auth-head-img" />
        <div className="auth-head-txt">MY Tube</div>
        </div>
      </div>
      <div className="auth-form">

      <div className='auth-form-head-txt'>login</div>
        <div className="auth-form-sub-txt">Enjoy all the video for free</div>
    <input type="email" className='auth-input' placeholder='email' onChange={(e)=>authDispatch({
      type:USER_EMAIL,
      payload:e.target.value
    })} value={authState.email} />
    <input type="password" className='auth-input' placeholder='password' onChange={(e)=>authDispatch({
      type:USER_PASSWORD,
      payload:e.target.value
    })} value={authState.password} />
    <button onClick={()=>{
      
      loginUser(authState,authDispatch,navigateFnc)
      
    }} className="auth-btn">LOGIN</button>
    <Link to={"/signup"} className="auth-link">signup</Link> 
    </div>
    </div> 
      
    </>
      
  )
}

export default Login