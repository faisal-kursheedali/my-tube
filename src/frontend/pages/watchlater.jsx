import React, { useEffect } from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext'
import { useAuth } from '../context/authContext';
import { getWatchlater } from '../services/watchlaterData';
import  empty from "../assets/empty.svg";

const Watchlater = () => {
  const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
  console.log(token);
  useEffect(()=>{
    getWatchlater(token,actionDispatch);
    //console.log(actionState.watchlaterData);
  },[actionDispatch, token])
  return (
    <div className="watch-later-container">
      {
        actionState.watchlaterData.length>0?<VideoListing data={actionState.watchlaterData}/>:(<div className="img-for-empty-content-container">
        <img src={empty} alt="" className='img-for-empty-content'/>
        </div>)
      }
      
    </div>
  )
}

export default Watchlater