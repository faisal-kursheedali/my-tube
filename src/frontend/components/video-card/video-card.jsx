import React ,{useState}from 'react'
import "./video-card.css"
import {AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
// import {viewFnc,durationFnc}from "../../components/function/import"
const VedioCard = ({value}) => {
  // const [vdoClick, setVdoClick] = useState(false);
  console.log(value);
  const [hover,setHover]=useState(false);

  
  return (
    <>
    
    <div className="vdo-card-container">
        <Link state={
            {data:value}
          } to={`/video:${value._id}`}
        className="bui-link-nostyle vdo-link">
        <div className="vdo-thumbnail">
        {
          hover?<img src={value.contentDetail.hoverThumbnail} alt="" className="vdo-thumbnail-image"  onMouseOut={()=>setHover(false)} />:(<img src={value.contentDetail.thumbnail} alt="" className="vdo-thumbnail-image" onMouseOver={()=>setHover(true)}  />)
        }
            {/* <img src={value.contentDetail.thumbnail} alt="" className="vdo-thumbnail-image" /> */}
            <span className="vdo-duration">{
             value.contentDetail.duration
            }</span>
        </div>
        <div className="vdo-title">{value.contentDetail.title}</div>
        <div className="vdo-detail"><AiFillEye/>{value.contentDetail.viewCount} 
        {/* •<div className="vdo-date">6days ago</div> */}
        </div></Link>
        <div className="vdo-channel">
            <img src={value.channelDetail.channelImg} alt="" className="bui-avatar-rnd avatar-sm vdo-channel-image" />
            <div className="vdo-channel-name">{value.channelDetail.channelName}</div>
        </div>
    </div>
    
    </>
  )
}

export default VedioCard