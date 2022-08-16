import React from 'react'
import { useAuth } from '../context/authContext'

const User = () => {
    const {authState}=useAuth();
    const {name,email}=authState;
  return (
    <div>
        <h1>{name}</h1>
        <h3>{email}</h3>
    </div>
  )
}

export default User