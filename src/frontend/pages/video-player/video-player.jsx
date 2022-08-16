import React, { useEffect } from 'react'
import "./video-player.css"
import VideoReleated from './video-releated/video-releated'
import VideoDesc from './video-section/video-desc';

import VideoSection from './video-section/video-section';
// import { useDispatch, useSelector } from 'react-redux';
// import {dataFetch} from "../../app/feature/dataFetch"
// import { hideNav } from '../../app/feature/showNav';
import { useLocation } from 'react-router-dom';
import { useData } from '../../context/dataContext';
import { addHistory } from '../../services/historyData';
import { useAction } from '../../context/actionContext';
import { useAuth } from '../../context/authContext';
// import FetchVedio from '../../fetch';
// import { getVdoById,getReleatedVdo } from '../../api';
// import { addData, initialValue } from '../../app/feature/video';
// import { addReleatedVdo } from '../../app/feature/releatedVdo';

const VideoPLayer = () => {
  // const state = useSelector(state => state.dataFetch);
  // const dispatch=useDispatch();
  // dispatch(initialValue())
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState({});
  // // setValue(crr=>crr=data)
  // // console.log(location);
  // const[render,setrender]=useState(false)
  // const state = useSelector(state => state.vdoToPlay);
  // const [data,setData]=useState('');
  // console.log(addData);
  // console.log(getVdoById(vdoId));
  // vdoId=vdoId.slice(7);
  // FetchVedio(getVdoById(vdoId),addData)
  // useEffect(()=>{
    //   setData(prev  => prev=state.data[0])
    //   console.log(state.data[0]);
    //   setrender(true)
    // },[state])
    
    
    
    // const [value, setValue] = useState('');
    // const releatedVdo=useSelector(state=>state.releatedVdo);
    //   FetchVedio(getReleatedVdo(vdoId),addReleatedVdo);
    //   console.log(getReleatedVdo(data));
    //   useEffect(() => {
      //       setValue(prev=>prev=releatedVdo.data)
  //       console.log(value);
  //   }, [releatedVdo]);
  // console.log(vdoId);
  // console.log(typeof vdoId);
  // let vdoDetail
  // const url=getVdoById(vdoId)
  // console.log(url);
  // const vdoDetail= async ()=>{
    //   const responce= await fetch(url);
  //   const data=await responce.json();
  //   return data.items
  // }
  // const data=vdoDetail();
  // useEffect(() => {
  //   if (data.length!==0) {
    //     console.log(value)
    //     // console.log(state.data);
    //     // vdoDetail = state.data[0];
    //     setValue(curr=>curr=data);
    //     setLoading(false)
    //     console.log("hiiii");
    //     console.log(value);
    //   }
    // }, [data]);
    // console.log(getVdoById(vdoId));
  // useEffect(()=>{
    //   // console.log(value);
    //   dispatch(addData(state.data[0]))
    //     setValue(curr=>curr=store.data)
    //           setLoading(curr=>curr=false)
    // if (store.data==={}) {
    // }
    // setValue((curr)=>{
      //     dispatch(addData(state.data[0]))
      //     curr=store.data});
      //     setLoading(curr=>curr=false)
      
      // console.log(value);
      
      // },[state.data])
      // console.log(store.data);
      // console.log(value);
      // FetchVedio(getVdoById(vdoId));
      // setLoading(curr=>curr=false);
  const {actionDispatch}=useAction();
  const {authState}=useAuth();
  const {token}=authState
      const location = useLocation();
  let  vdoData  = location.state.data;
  // const [render,setRender]=useState(false);
  useEffect(()=>{
    addHistory(token,actionDispatch,vdoData);
  })
  // if(vdoData!=={}){
  //   console.log(vdoData);
  //   setRender(true)
  // }
  // const {data}=location.state
  console.log(vdoData)
  const {vdoList}=useData();
  const releatedVdo=vdoList.filter(i=>vdoData._id !== i._id);
  
  
  return (
    <>

      {
       (<div className="video-player-container">
        {console.log(vdoData)}
      <div className="vedio-player">
      <VideoSection data={vdoData.contentDetail.link}/>
        {console.log(vdoData)}
      <VideoDesc data={vdoData}/>
        {console.log(vdoData)}
      </div>
      <div className="vedio-releated">
        {console.log(vdoData)}
      {
        releatedVdo?
        <VideoReleated data={releatedVdo}/>:""
      }
      </div>
      </div>)
      }
       
      
    </>


  )

}

export default VideoPLayer