import React,{useEffect} from 'react'
import { VideoListing } from '../components/import';
import { useAction } from '../context/actionContext';
import { useAuth } from '../context/authContext';
import { getLikedVdo } from '../services/likedVdoData';
import  empty from "../assets/empty.svg";
const Like = () => {
  const {actionState,actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState;
  useEffect(() => {
    console.log(token);
    getLikedVdo(token,actionDispatch);
  },[token,actionDispatch]);
  return (
    <>
    <div className="like-vdo-container">
      {
        actionState.likedVdoData.length>0?<VideoListing data={actionState.likedVdoData}/>:(<div className="img-for-empty-content-container">
        <img src={empty} alt="" className='img-for-empty-content'/>
        </div>)
      }
    </div>
    
    </>
  )
}

export default Like