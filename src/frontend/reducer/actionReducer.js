import { CLEAR_DATA, HISTORY_DATA, LIKED_DATA, PLAYLIST_DATA, SINGLE_PLAYLIST, WATCHLATER_DATA } from "../constant/actionConstant";
import { actionInitialState } from "../context/actionContext";

const ActionReducer=(state,action)=>{
    switch (action.type) {
        case LIKED_DATA:{
            return state={
                ...state,
                likedVdoData:action.payload
            }
        }
        case HISTORY_DATA:{
            return state={
                ...state,
                historyData:action.payload
            }
        }
        case WATCHLATER_DATA:{
            return state={
                ...state,
                watchlaterData:action.payload
            }
        }
        case PLAYLIST_DATA:{
            return state={
                ...state,
                playlistData:action.payload
            }
        }
        case SINGLE_PLAYLIST:{
            return state={
                ...state,
                playlistData:state.playlistData.map(i=>i._id===action.payload._id?action.payload:i)
            }
        }
        case CLEAR_DATA:{
            return state=actionInitialState;
        }
    
        default:
            return state;
    }
}

export default ActionReducer;