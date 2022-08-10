import React from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../context/authContext'
import { loginUser } from '../services/authServices'
import { useNavigate,useLocation } from "react-router-dom";
import { USER_EMAIL, USER_PASSWORD } from '../constant/authConstant';

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate(location.state.from.pathname,{replace:true});
  }
  return (
    <>
    <div>Login</div>
    {/* <input type="text" placeholder='name' onChange={(e)=>authState.name=e.target.value} value={authState.name}/> */}
    <input type="email" placeholder='email' onChange={(e)=>authDispatch({
      type:USER_EMAIL,
      payload:e.target.value
    })} value={authState.email} />
    <input type="password" placeholder='password' onChange={(e)=>authDispatch({
      type:USER_PASSWORD,
      payload:e.target.value
    })} value={authState.password} />
    <button onClick={()=>{
      
      loginUser(authState,authDispatch,navigateFnc)
    }}>LOGIN</button>
    <Link to={"/signup"}>Signup</Link>
    </>
  )
}

export default Login