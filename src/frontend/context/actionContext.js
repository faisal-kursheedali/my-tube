import { createContext,useContext,useReducer,useState } from "react";
import ActionReducer from "../reducer/actionReducer";
import filterReducer from "../reducer/filterReducer";
// import { localStorage.getItem } from "../utility/localStorage";

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
    const [searchX,setSearchX]=useState(false);
    const mode=localStorage.getItem("darkmode");
    const [darkMode,setDarkMode]=useState(mode|false);
    const [modal,setModal]=useState(false);
    return(

    <actionContext.Provider value={{actionState,actionDispatch,filterState,filterDispatch,sideNav,setSideNav,darkMode,setDarkMode,modal,setModal,searchX,setSearchX}}>
        {children}
    </actionContext.Provider>
    )
}

export const useAction=()=>useContext(actionContext);
export default ActionProvider;