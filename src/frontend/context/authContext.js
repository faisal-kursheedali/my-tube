import { createContext,useContext, useReducer } from "react";
import AuthReducer from "../reducer/authReducer";

export const authContext=createContext();
export const authInitialState={
    name:"",
    email:"",
    password:"",
    token:"",
    loading:false,
    error:"",
    confirmPassword:"",
    isLoggedin:false,
    status:false,
}

const AuthProvider=({children})=>{
    const [authState,authDispatch]=useReducer(AuthReducer,authInitialState)
    return(<authContext.Provider value={{authState,authDispatch}}>
        {children}
    </authContext.Provider>)
    
}

export const  useAuth=()=>useContext(authContext);
export default AuthProvider;