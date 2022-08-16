import React,{useEffect} from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext';
import { useAuth } from '../context/authContext';
import { getLikedVdo } from '../services/likedVdoData';

const Like = () => {
  const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
  useEffect(() => {
    getLikedVdo(token,actionDispatch);
    console.log(actionState.likedVdoData);
  });
  return (
    <>
    <div className="like-vdo-container">
      <VideoListing data={actionState.likedVdoData}/>
    </div>
    
    </>
  )
}

export default Like