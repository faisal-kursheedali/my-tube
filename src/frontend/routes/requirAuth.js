import React from 'react';
import { useAuth } from '../context/authContext';
import {Navigate,useLocation} from "react-router-dom"


const RequirAuth = ({children}) => {
    const {authState}=useAuth();
    const {token}=authState;
    console.log(token);
    const location=useLocation();
  return (
    <>
    {
        token?(children):(<Navigate to={"/login"} state={{from:location}}/>)
    }
    
    </>
  )
}

export default RequirAuth