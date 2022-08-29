import React from 'react'
import { useAuth } from '../context/authContext'
import {  signupUser } from '../services/authServices'
import { useNavigate} from "react-router-dom";
import { USER_EMAIL, USER_NAME, USER_PASSWORD } from '../constant/authConstant';
import {Link} from "react-router-dom"

import "./css/auth.css"

const Signup = () => {
  // const location=useLocation();
  const navigate=useNavigate();
  
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate("/",{replace:true});
  }
  return (
    <>
    
      {/* <div className="login-container">
      <div className="login">
      <div className="login-box">
          <div className="login-txt-head">Youtube clone</div>
          <img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className="login-image" />
          <p className="login-text">Enjoy the vedio by Creating account</p>
          <button className="login-btn bui-btn bui-btn-sm" onClick={()=>setClick(true)}>Signup with Google</button>
      </div>
      </div>
      </div>:"" */}
    
     <>
     <div className="auth-containe">
      <div className="auth-head">
        <div className="auth-head-img">
        <img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className="auth-head-img" />
        <div className="auth-head-txt">MY Tube</div>
        </div>
      </div>
      <div className="auth-form">

      <div className='auth-form-head-txt'>signup</div>
        <div className="auth-form-sub-txt">Enjoy all the video for free</div>
    <input type="text" className='auth-input' placeholder='name' onChange={(e)=>authDispatch({
      type:USER_NAME,
      payload:e.target.value
    })} value={authState.name}/>
    <input type="email" className='auth-input' placeholder='email' onChange={(e)=>authDispatch({
      type:USER_EMAIL,
      payload:e.target.value
    })} value={authState.email} />
    <input type="password" className='auth-input' placeholder='password' onChange={(e)=>authDispatch({
      type:USER_PASSWORD,
      payload:e.target.value
    })} value={authState.password} />
    <button onClick={()=>{
      signupUser(authState,authDispatch,navigateFnc); 
    }} className="auth-btn">sign up</button>
    </div>
    <Link to={"/login"} className="auth-link">login</Link> 
    </div> 
      </>
    
    </>
  )
}

export default Signup