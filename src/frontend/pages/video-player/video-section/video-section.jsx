import React from 'react'
import ReactPlayer from 'react-player'
import "./video-section.css"
const VideoSection = ({data}) => {
  // console.log(data);
  return (
    <>


<div className="video-section">
    
    <ReactPlayer url={data} controls={true} className="video-section-video-player" width={"100%"} height={"100%"} />
    </div>    

    
    </>
  )
}

export default VideoSection