import React,{useState,useEffect} from 'react'
import { useAction } from '../../context/actionContext'
import { useAuth } from '../../context/authContext';
import "./playlist-modal.css";
// import "../playlist/playlistModal.css";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { addVdoToPlaylist, createPlaylist, delVdoFromPlaylist, getPlaylistData } from '../../services/playlistServises';

const PlaylistModal = ({video}) => {
    const {actionState,actionDispatch,setModal} = useAction();
    const {playlistData}=actionState;
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const{authState}=useAuth();
    const {token}=authState;
    useEffect(()=>{
        getPlaylistData(token,actionDispatch);
        // console.log(playlistData);
    },[token,actionDispatch])
    // useEffect(()=>{
    //     getPlaylistData(token,actionDispatch);
    // },[playlistData])
    
    // console.log(authState);
  return(
    <div className="playlist-modal-container">
        <div className="playlist-modal-close" onClick={()=>setModal(false)}>
            <AiOutlineCloseCircle/>
        </div>
        <div className="playlist-modal-head">Save</div>
        {

            // console.log(playlistData)
        }
        
        {
            playlistData&&playlistData.length>0?(<ul className="playlist-modal-list">
            {
                playlistData.map((i,index)=>{
                    // console.log(i);
                    return (
                    <li className="playlist-modal-list-item" key={index}>
                        <label htmlFor={i._id} className="playlist-modal-list-item-label">
                        <input type="checkbox" 
                            id={i._id}
                            checked={i.videos.some((item)=>item._id===video._id)}
                            onChange={(e)=>{
                                e.target.checked?addVdoToPlaylist(token,actionDispatch,i._id,video):delVdoFromPlaylist(token,actionDispatch,i._id,video._id);
                            }}
                        />{i.title}</label>
                    </li>)
                })
            }
        </ul>):(
                <div className="playlist-modal-default-display">
                    no play list available<br/>
                    create play list.....
                </div>
            )
        }
        
        <hr/>
        <div className="create-new-playlist">
            <input type="text" className="playlist-input-title" value={title} onChange={(e)=>setTitle(prev=>prev=e.target.value)} placeholder="Title" />
            <input type="text" className="playlist-input-description" value={description} onChange={(e)=>setDescription(prev=>prev=e.target.value)} placeholder="Description"/>
            <button className="playlist-btn" onClick={()=>{
                createPlaylist(token,actionDispatch,{title,description});
            }}>create</button>
        </div>
    </div>
  )
}

export default PlaylistModal