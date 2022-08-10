import React from 'react';
import { useAuth } from '../context/authContext';
import {Navigate,useLocation} from "react-router-dom"


const RequirAuth = ({children}) => {
    const {authState}=useAuth();
    const {status}=authState;
    const location=useLocation();
  return (
    <>
    {
        status?(children):(<Navigate to={"/login"} state={{from:location}}/>)
    }
    
    </>
  )
}

export default RequirAuth