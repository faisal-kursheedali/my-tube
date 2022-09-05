import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LOGOUT_USER } from '../constant/authConstant';
import { useAuth } from '../context/authContext'
import "./css/user.css"

const User = () => {
    const {authState,authDispatch}=useAuth();
    const {name,email}=authState;
    const nav=useNavigate();
    // console.log(name.charAt());
  return (

      <div className="user-container">
        <div className="user-info-container">
        <div className="user-profile"><div className="user-letter">{name.charAt()}</div></div>
        <div className="user-detail">
          <div className="user-name">User name: <span className="user-given-value">{name}</span></div>
        <div className="user-email">Email id: <span className="user-given-value">{email}</span></div>
        </div>
        </div>
        <div className="user-btn">

        <button className='user-explore-btn' onClick={()=>nav("/",{replace:true})}>explore</button>
        <button className='user-logout-btn'  onClick={()=>{
                    authDispatch({
                        type:LOGOUT_USER
                    });
                    nav("/",{replace:true})
                }}>Logout</button>
        </div>
    </div>
  )
}

export default User