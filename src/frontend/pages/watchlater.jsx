import React, { useEffect } from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext'
import { useAuth } from '../context/authContext';
import { getWatchlater } from '../services/watchlaterData';

const Watchlater = () => {
  const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
  console.log(token);
  useEffect(()=>{
    getWatchlater(token,actionDispatch);
    console.log(actionState.watchlaterData);
  })
  return (
    <div className="watch-later-container">
      <VideoListing data={actionState.watchlaterData}/>
    </div>
  )
}

export default Watchlater