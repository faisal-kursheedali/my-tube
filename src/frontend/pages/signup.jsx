import React,{useState} from 'react'
import { useAuth } from '../context/authContext'
import {  signupUser } from '../services/authServices'
import { useNavigate} from "react-router-dom";
import { USER_EMAIL, USER_NAME, USER_PASSWORD } from '../constant/authConstant';

import "./css/signup.css"

const Signup = () => {
  // const location=useLocation();
  const navigate=useNavigate();
  
  const [click, setClick] = useState(false);
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate("/",{replace:true});
  }
  return (
    <>
    {
      !click?
      <div className="login-container">
      <div className="login">
      <div className="login-box">
          <div className="login-txt-head">Youtube clone</div>
          <img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className="login-image" />
          <p className="login-text">Enjoy the vedio by Creating account</p>
          <button className="login-btn bui-btn bui-btn-sm" onClick={()=>setClick(true)}>Signup with Google</button>
      </div>
      </div>
      </div>:""
    }
    {
      click?( <>
      <div>signup</div>
    <input type="text" placeholder='name' onChange={(e)=>authDispatch({
      type:USER_NAME,
      payload:e.target.value
    })} value={authState.name}/>
    <input type="email" placeholder='email' onChange={(e)=>authDispatch({
      type:USER_EMAIL,
      payload:e.target.value
    })} value={authState.email} />
    <input type="password" placeholder='password' onChange={(e)=>authDispatch({
      type:USER_PASSWORD,
      payload:e.target.value
    })} value={authState.password} />
    <button onClick={()=>{
      signupUser(authState,authDispatch,navigateFnc);
      setClick(false)
    }}>LOGIN</button>
      
      </>):""
    }
    
    </>
  )
}

export default Signup