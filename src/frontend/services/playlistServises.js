import axios from "axios"
import { PLAYLIST_DATA, SINGLE_PLAYLIST } from "../constant/actionConstant";

export const getPlaylist=async (token,actionDispatch)=>{
    try {
        const {data}=axios.get("/api/user/playlists",{
            headers:{
                authorization: token,
            }
        })
        console.log(data);
        actionDispatch({
            type:PLAYLIST_DATA,
            payload:data.playlists
        })  
    } catch (error) {
        console.log(error.message);
    }
    
}
export const createPlaylist=async (token,actionDispatch,newPlaylist)=>{
    try {
        const {data}=await axios.post(`/api/user/playlists`,{
            playlist:newPlaylist
        },{
            headers:{
                authorization: token,
            }
        })
        console.log(data);
        actionDispatch({
            type:PLAYLIST_DATA,
            payload:data.playlists
        })  
    } catch (error) {
        console.log(error.message);
    }
    
}
export const deletePlaylist=async (token,actionDispatch,playlistID)=>{
    try {
        const {data}=axios.delete(`/api/user/playlists/${playlistID}`,{
            headers:{
                authorization: token,
            }
        })
        actionDispatch({
            type:PLAYLIST_DATA,
            payload:data.playlists
        })  
    } catch (error) {
        console.log(error.message);
    }
    
}

export const getPlaylistData=async(token,playlistID)=>{
    const {data}=await axios.get(`/api/user/playlists/${playlistID}`,{
        headers:{
            authorization: token,
        }
    })
    return data.playlist
}

export const addVdoToPlaylist=async(token,actionDispatch,playlistID,video)=>{
    try {
        const {data} = await axios.post(
          `/api/user/playlists/${playlistID}`,
          {
            video,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        actionDispatch({
          type: SINGLE_PLAYLIST,
          payload: data.playlist
        });
    }
    catch(error){
        console.log(error.message);
    }
}

export const delVdoFromPlaylist=async(token,actionDispatch,playlistID,videoID)=>{
    try {
        const {data} = await axios.delete(
          `/api/user/playlists/${playlistID}/${videoID}`,
          {
            headers: {
              authorization: token,
            },
          }
        );
        actionDispatch({
          type: SINGLE_PLAYLIST,
          payload: data.playlist
        });
    }
    catch(error){
        console.log(error.message);
    }
}