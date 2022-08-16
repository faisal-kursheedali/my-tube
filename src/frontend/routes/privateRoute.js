import React from 'react';
import { useAuth } from '../context/authContext';
import {useLocation, Navigate} from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {authState}=useAuth()
    const location=useLocation();
    const {token}=authState;
  return (
    <>
    {
        token?(<Navigate to={"/"} state={{from:location}} replace/>):(children)
    }
    </>
  )
}

export default PrivateRoute