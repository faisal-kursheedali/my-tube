import React,{useState,useEffect} from 'react'
import { useAction } from '../../context/actionContext'
import { useAuth } from '../../context/authContext'
import { addVdoToPlaylist, createPlaylist, delVdoFromPlaylist, getPlaylistData } from '../../services/playlistServises';

const PlaylistModal = ({video}) => {
    const {actionState,actionDispatch} = useAction();
    const {playlistData}=actionState;
    useEffect(()=>{
        getPlaylistData(token,actionDispatch);
        console.log(playlistData);
    })
    // useEffect(()=>{
    //     getPlaylistData(token,actionDispatch);
    // },[playlistData])
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const{authState}=useAuth();
    const {token}=authState;
  return(
    <div className="playlist-modal-container">
        <div className="playlist-modal-head">Save</div>
        {

            console.log(playlistData)
        }
        <ul className="playlist-modal-list">
            {
                playlistData.map((i,index)=>{
                    console.log(i);
                    return (<li className="playlist-modal-list-item" key={index}>
                        <input type="checkbox" 
                            id={i._id}
                            checked={i.videos.some((item)=>item._id===video._id)}
                            onChange={(e)=>{
                                e.target.checked?addVdoToPlaylist(token,actionDispatch,i._id,video):delVdoFromPlaylist(token,actionDispatch,i._id,video._id);
                            }}
                        />{i.title}
                    </li>)
                })
            }
        </ul>
        <hr/>
        <div className="create-new-playlist">
            <input type="text" className="playlist-input-title" value={title} onChange={(e)=>setTitle(prev=>prev=e.target.value)} />
            <input type="text" className="playlist-input-description" value={description} onChange={(e)=>setDescription(prev=>prev=e.target.value)}/>
            <button className="playlist-btn" onClick={()=>{
                createPlaylist(token,actionDispatch,{title,description});
            }}>create</button>
        </div>
    </div>
  )
}

export default PlaylistModal