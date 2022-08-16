import React,{useEffect} from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext';
import { useAuth } from '../context/authContext';
import {  getHistory } from '../services/historyData';
const History = () => {
    const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
    useEffect(()=>{
        getHistory(token,actionDispatch);
        console.log(actionState.historyData);
    })
  return (
    <div className="history-container">
            <VideoListing data={actionState.historyData}/>
    </div>
  )
}

export default History