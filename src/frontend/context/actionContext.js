import { createContext,useContext,useReducer,useState } from "react";
import ActionReducer from "../reducer/actionReducer";
import filterReducer from "../reducer/filterReducer";
import { getLocalStorage } from "../utility/localStorage";

export const actionInitialState={
    likedVdoData:[],
    historyData:[],
    watchlaterData:[],
    playlistData:[],
}
export const actionContext=createContext();

const ActionProvider=({children})=>{
    const [filterState,filterDispatch]=useReducer(filterReducer,{
        search:"",
    })
    const[actionState,actionDispatch]=useReducer(ActionReducer,actionInitialState)
    const [sideNav,setSideNav]=useState(false);
    const mode=getLocalStorage("darkmode")
    const [darkMode,setDarkMode]=useState(mode);
    const [modal,setModal]=useState(false);
    return(

    <actionContext.Provider value={{actionState,actionDispatch,filterState,filterDispatch,sideNav,setSideNav,darkMode,setDarkMode,modal,setModal}}>
        {children}
    </actionContext.Provider>
    )
}

export const useAction=()=>useContext(actionContext);
export default ActionProvider;