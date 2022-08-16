import React,{useEffect} from 'react';
import { VideoListing } from '../components/import';
import { CLEAR_SEARCH } from '../constant/actionConstant';
import { useAction } from '../context/actionContext';
import { useData } from '../context/dataContext';


const Search = () => {
    useEffect(()=>{
        filterDispatch({type:CLEAR_SEARCH})
    })
    const{filterState,filterDispatch}=useAction();
    const {vdoList}=useData();
    console.log(filterState.search);
    // const result=()=>{

    // }
    
    const search=filterState.search;
    const result=vdoList.filter((item)=>{
        if (search==="") {
            return vdoList
        }else if(item.contentDetail.title.toLowerCase().includes(search)){
            return item
        }else{
            return ""
        }
    })
    console.log(result);
    
    return (
        <div className="search-container">
        <VideoListing data={result}/>
    </div>
  )
}

export default Search