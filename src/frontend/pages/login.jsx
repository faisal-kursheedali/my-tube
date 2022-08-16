import React,{useState} from 'react'
import "./css/login.css"
import {Link} from "react-router-dom"
import { useAuth } from '../context/authContext'
import { loginUser } from '../services/authServices'
import { useNavigate,useLocation } from "react-router-dom";
import { USER_EMAIL, USER_PASSWORD } from '../constant/authConstant';

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const [click, setClick] = useState(false);
  const{authState,authDispatch}=useAuth();
  const navigateFnc=()=>{
    navigate(location.state.from.pathname,{replace:true});
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
          <p className="login-text">Enjoy the vedio by logging in</p>
          <button className="login-btn bui-btn bui-btn-sm" onClick={()=>setClick(true)}>Login with Google</button>
      </div>
      </div>
      </div>:""
    }
    
    {
      click?(<>
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
      setClick(false);
    }}>LOGIN</button>
    <Link to={"/signup"}>Signup</Link>
      
      </>):""
    }
    
    </>
  )
}

export default Login