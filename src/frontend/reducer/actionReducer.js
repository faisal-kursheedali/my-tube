import { CLEAR_DATA, HISTORY_DATA, LIKED_DATA, WATCHLATER_DATA } from "../constant/actionConstant";
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
        case CLEAR_DATA:{
            return state=actionInitialState;
        }
    
        default:
            return state;
    }
}

export default ActionReducer;