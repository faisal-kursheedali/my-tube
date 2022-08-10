import React from 'react'
import { useAuth } from '../context/authContext'
import {  signupUser } from '../services/authServices'
import { useNavigate,useLocation } from "react-router-dom";
import { USER_EMAIL, USER_NAME, USER_PASSWORD } from '../constant/authConstant';

const Signup = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate("/",{replace:true});
  }
  return (
    <>
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
    }}>LOGIN</button>
    </>
  )
}

export default Signup