import React,{useEffect} from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext';
import { useAuth } from '../context/authContext';
import {  getHistory } from '../services/historyData';
import  empty from "../assets/empty.svg";
const History = () => {
    const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
    useEffect(()=>{
        getHistory(token,actionDispatch);
        // console.log(actionState.historyData);
    },[token,actionDispatch])
  return (
    <div className="history-container">
      {
        actionState.historyData.length>0?<VideoListing data={actionState.historyData}/>:(
        <div className="img-for-empty-content-container">
        <img src={empty} alt="" className='img-for-empty-content'/>
        </div>)
      }
            
    </div>
  )
}

export default History