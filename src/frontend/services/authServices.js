import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING_FALSE, AUTH_LOADING_TRUE, USER_TOKEN } from "../constant/authConstant";
// import { useAuth } from "../context/authContext";
import { setLocalStorage } from "../utility/localStorage";



export const signupUser=async (authState,authDispatch,navFnc)=>{
    authDispatch({
        type:AUTH_LOADING_TRUE
    })
    try {
        const {data}=await axios.post("/api/auth/signup",{
            email:authState.email,
            password:authState.password,
            name:authState.name
        })
        console.log(data);
        setLocalStorage("token",data.encodedToken);
        authDispatch({
            type:USER_TOKEN,
            payload:data.encodedToken
        });
        authDispatch({
            type:AUTH_LOADING_FALSE
        })
        navFnc();
    } catch (error) {
        console.log(error);
        authDispatch({
            type:AUTH_ERROR,
            payload:error.message
        });
        authDispatch({
            type:AUTH_LOADING_FALSE
        })
    }
    
}

export const loginUser=async(authState,authDispatch,navFnc)=>{
    authDispatch({
        type:AUTH_LOADING_TRUE
    })
    try {
        const {data}=await axios.post("/api/auth/login",{
            email:authState.email,
            password:authState.password,
        })
        console.log(data);
        setLocalStorage("token",data.encodedToken);
        authDispatch({
            type:USER_TOKEN,
            payload:data.encodedToken
        });
        authDispatch({
            type:AUTH_LOADING_FALSE
        })
        navFnc();
    } catch (error) {
        console.log(error);
        authDispatch({
            type:AUTH_ERROR,
            payload:error.message
        });
        authDispatch({
            type:AUTH_LOADING_FALSE
        })
    }
}