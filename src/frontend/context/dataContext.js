import axios from "axios";
import { createContext,useContext,useState,useEffect } from "react";

export const dataContext=createContext();

const DataProvider=({children})=>{
    const [vdoList,setVdoList]=useState([]);
    const [selectedVdo,setSelectedVdo]=useState();
    const [catagory,setCatagory]=useState([]);
    useEffect(()=>{
        const getAllVdo=async()=>{
            try {
                const {data}=await axios.get("/api/videos");
                setVdoList(prev=>prev=data.videos);
            } catch (error) {
                console.log(error);
            }   
        };
        getAllVdo();

        const getAllCatagory=async()=>{
            try {
                const {data}=await axios.get("/api/categories");
                setCatagory(prev=>prev=data.categories);
            } catch (error) {
                console.log(error.message);
            }
        }
        getAllCatagory();
})
    return(
        <dataContext.Provider value={{vdoList,catagory,selectedVdo,setSelectedVdo}}>
            {children}
        </dataContext.Provider>
    )
}

export const useData=()=>useContext(dataContext);
export default DataProvider;