import React from 'react'
import { useAuth } from '../context/authContext'
import "./css/user.css"

const User = () => {
    const {authState}=useAuth();
    const {name,email}=authState;
    console.log(name.charAt());
  return (
    <div>
      <div className="user-container">
        <div className="user-profile"><div className="user-letter">{name.charAt()}</div></div>
        <div className="user-detail">
          <div className="user-name">User name: <span className="user-given-value">{name}</span></div>
        <div className="user-email">Email id: <span className="user-given-value">{email}</span></div>
        </div>
        </div>
    </div>
  )
}

export default User