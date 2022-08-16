import React from 'react'
import { VedioCard } from '../import'
import "./video-listing.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { addData } from '../../app/feature/polarVdo';


const VideoListing =  ({data}) => {
    console.log(data);
    // const state= useSelector(state=>state.dataFetch);
    // const store=useSelector(state=>state.popularVdo);
    // const[data,setData]=useState(store.data)
    // console.log(store.data);
    // const dispatch=useDispatch();
    // const arr= state.data;
    // useEffect(()=>{
    //     // console.log(store.dataAvailable);
    //     // console.log(store.data===[]);
    //     // console.log(store.data.length);
    //     if (store.data.length===0) {
    //         dispatch(addData(state.data));
    //         setData(crr=>crr=state.data);
            
    //     }
    //     // console.log(store.data);
      
    // },[state.data])
    // arr=state;
        return (
            <>
                <ul className="video-list">
                    {
                        data.map((i) => {
                            return <li className="video-list-item" key={i._id}> <VedioCard value={i} /></li>
                        })
                    }
                </ul>
            </>
        )
    
    
}

export default VideoListing