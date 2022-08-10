import { createContext,useContext,useReducer } from "react";
import ActionReducer from "../reducer/actionReducer";

export const actionInitialState={
    likedVdoData:[],
    historyData:[],
    watchlaterData:[],
    playlistData:[],
}
export const actionContext=createContext();

const ActionProvider=({children})=>{
    const[actionState,actionDisapatch]=useReducer(ActionReducer,actionInitialState)
    return(

    <actionContext.Provider value={{actionState,actionDisapatch}}>
        {children}
    </actionContext.Provider>
    )
}

export const useAction=()=>useContext(actionContext);
export default ActionProvider;