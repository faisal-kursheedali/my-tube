import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import viewFnc from '../../../component/function/view';
import "./video-releated-card.css"


const VideoReleatedCard = ({data}) => {
  const [hover,setHover]=useState(false)
  console.log(data);
  return (
    <>
    <Link state={
            {data:data}
          } to={`/video:${data._id}`} className="bui-link-nostyle vdo-releated-card-link">
    <div className="vdo-releated-card-container">
      <div className="vdo-releated-img-container">
        {
          hover?<img src={data.contentDetail.hoverThumbnail} alt="" className="vdo-releated-img"  onMouseOut={()=>setHover(false)} />:(<img src={data.contentDetail.thumbnail} alt="" className="vdo-releated-img" onMouseOver={()=>setHover(true)}  />)
        }
      
      </div>
      <div className="vdo-releated-desc">
        <div className="vdo-releated-desc-title">{data.contentDetail.title}</div>
        <div className="vdo-releated-desc-channel">{data.channelDetail.channelName}</div>
        {/* <div className="vdo-releated-desc-view"> </div> */}
        {/* <div className="vdo-releated-desc-time"></div> */}
        <div className="vdo-releated-desc-badge">{"new"}</div>
      </div>
    </div>
    </Link>
    
    </>
  )
}

export default VideoReleatedCard