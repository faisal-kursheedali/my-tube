import axios from "axios";
import { WATCHLATER_DATA } from "../constant/actionConstant";
// import { useAction } from "../context/actionContext";
// import {useAuth} from "../context/authContext"
// const {actionDispatch}=useAction();
// const {authState}=useAuth();
// const {token}=authState;

export const getWatchlater= async(token,actionDispatch)=>{
    
    try {
        const {data}= await axios.get("/api/user/watchlater",{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:WATCHLATER_DATA,
            payload:data.watchlater
        });
        
    } catch (error) {
        console.log(error.message);
    }
}
export const addWatchlater= async(token,actionDispatch,video)=>{
    try {
        const {data}= await axios.post(`/api/user/watchlater`,{video},{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:WATCHLATER_DATA,
            payload:data.watchlater
        });
        
    } catch (error) {
        console.log(error.message);
    }
}
export const removeWatchlater= async(token,actionDispatch,id)=>{
    try {
        const {data}= await axios.delete(`/api/user/watchlater/${id}`,{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:WATCHLATER_DATA,
            payload:data.watchlater
        });
        
    } catch (error) {
        console.log(error.message);
    }
}