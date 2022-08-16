import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING_FALSE, AUTH_LOADING_TRUE, USER_TOKEN } from "../constant/authConstant";
// import { useAuth } from "../context/authContext";
import { setLocalStorage } from "../utility/localStorage";



export const signupUser=async (authState,authDispatch,navFnc)=>{
    authDispatch({
        type:AUTH_LOADING_TRUE
    })
    try {
        const value={
            email:authState.email,
            password:authState.password,
            name:authState.name  
        }
        console.log(value);
        const res=await axios.post(`/api/auth/signup`, value)
        const {data}=res;
        console.log(data);
        setLocalStorage("token",data.encodedToken);
        setLocalStorage("userName",data.createdUser.name);
        setLocalStorage("userMail",data.createdUser.email);
        authDispatch({
            type:USER_TOKEN,
            payload:{
                token:data.encodedToken,
                name:data.createdUser.name,
                email:data.createdUser.email
            }
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
        setLocalStorage("userName",data.foundUser.name);
        setLocalStorage("userEmail",data.foundUser.email);
        authDispatch({
            type:USER_TOKEN,
            payload:{token:data.encodedToken,name:data.foundUser.name,email:data.foundUser.email}
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