import axios from "axios";
import { LIKED_DATA } from "../constant/actionConstant";
// import { useAction } from "../context/actionContext";
// import {useAuth} from "../context/authContext"
// const {actionDispatch}=useAction();


export const getLikedVdo= async(token,actionDispatch)=>{
    try {
        const res= await axios.get("/api/user/likes",{
            headers:{
                authorization: token,
            },
        });
        console.log(res);
        actionDispatch({
            type:LIKED_DATA,
            payload:res.data.likes
        });
        
    } catch (error) {
        console.log(error);
    }
}
export const addLikedVdo= async(token,actionDispatch,video)=>{
    try {
        const {data}= await axios.post(`/api/user/likes`,{video},{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:LIKED_DATA,
            payload:data.likes
        });
        
    } catch (error) {
        // console.log(error.message);
    }
}
export const removeLikedVdo= async(token,actionDispatch,id)=>{
    try {
        const {data}= await axios.delete(`/api/user/likes/${id}`,{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:LIKED_DATA,
            payload:data.likes
        });
        
    } catch (error) {
        // console.log(error.message);
    }
}