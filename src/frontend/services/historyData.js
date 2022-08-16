import axios from "axios";
import { HISTORY_DATA } from "../constant/actionConstant";
// import { useAction } from "../context/actionContext";
// import {useAuth} from "../context/authContext"
// const {actionDispatch}=useAction();
// const {authState}=useAuth();
// const {token}=authState;

export const getHistory= async(token,actionDispatch)=>{
    try {
        const {data}= await axios.get("/api/user/history",{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:HISTORY_DATA,
            payload:data.history
        });
        
    } catch (error) {
        console.log(error.message);
    }
}
export const addHistory= async(token,actionDispatch,video)=>{
    try {
        const response = await axios.post(
          "/api/user/history",
          { video },
          {
            headers: {
              authorization: token,
            },
          }
        );
        actionDispatch({ type: HISTORY_DATA, payload: response.data.history });
      }catch (error) {
        console.log(error.message);
    }
}
export const removeHistory= async(token,actionDispatch,id)=>{
    try {
        const {data}= await axios.delete(`/api/user/history/${id}`,{
            headers:{
                authorization: token,
            },
        })
        actionDispatch({
            type:HISTORY_DATA,
            payload:data.history
        });
        
    } catch (error) {
        console.log(error.message);
    }
}