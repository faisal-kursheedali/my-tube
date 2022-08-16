import React, { useState } from 'react'
import "./video-desc.css"
import { BiLike, BiDislike } from "react-icons/bi"
import { RiPlayListAddLine } from "react-icons/ri"
import { MdOutlineWatchLater } from "react-icons/md"
import { useAuth } from '../../../context/authContext'
import { useAction } from '../../../context/actionContext'
import { addLikedVdo, removeLikedVdo } from '../../../services/likedVdoData'
import { addWatchlater } from '../../../services/watchlaterData'
// import PlaylistModal from '../../../components/playlist/playlistModal'
// import viewFnc from '../../../component/function/view'
// import { getChannel } from '../../../api'
// import { useSelector } from 'react-redux'
// import FetchVedio from '../../../fetch'

const VideoDesc = ({ data }) => {
    console.log(data);
    const {authState}=useAuth();
    const {actionDispatch,setModal}=useAction();
    const {token}=authState;
    // const like = viewFnc(data.statistics.likeCount);
    // const state = useSelector(state => state.dataFetch);
    // let subCount=viewFnc()
    const [sub, setSub] = useState(false)
    const [desc, setDesc] = useState(false)
    // const description = data.snippet.description
    // console.log(data);
    //     const getChannelData=(value)=>{
            // subCount=viewFnc((value.data[0]).statistics.subscriberCount);
    //         console.log(value);
    //         // let {data}=value
    //         // console.log(data);
    //         // return value.data[0]
    //     }
    //  const value=getChannelData(FetchVedio(getChannel(data.snippet.channelId)));
    //  const subCount=viewFnc(state.data)
    // const value = FetchVedio(getChannel(data.snippet.channelId));
    // console.log(value);


    return (
        <>
        {/* {
            modal?(
                <>
                <div className="playlist-modal-container">

                <PlaylistModal video={data}/>
                </div>
                </>
            ):""
        } */}
            <div className="video-section-dec-container">
                <div className="video-section-title">
                    {data.contentDetail.title}
                </div>
                <div className="video-section-views">
                    {data.contentDetail.viewCount} viewes
                </div>
                <div className="video-section-desc">
                    {
                        desc ? (<>
                            {data.contentDetail.description}
                            <span className="video-section-desc-more" onClick={() => {
                                setDesc(prev => prev = false)
                            }}>
                                ...show less
                            </span>
                        </>) : (<>
                            {data.contentDetail.description.substring(0, 199)}
                            <span className="video-section-desc-more" onClick={() => {
                                setDesc(prev => prev = true)
                            }}>
                                ...more
                            </span>
                        </>)
                    }
                </div>
                <div className="video-section-btn">
                    <ul className="video-section-btn-list">
                        <li className="video-section-btn-item"> <BiLike className="video-section-btn-item-icn" /> <div className="video-section-btn-item-txt" onClick={()=>{
                            addLikedVdo(token,actionDispatch,data);
                        }}> like</div></li>
                        <li className="video-section-btn-item"><BiDislike className="video-section-btn-item-icn" onClick={()=>{
                            removeLikedVdo(token,actionDispatch,data._id);
                        }} /> <div className="video-section-btn-item-txt"> dislike</div></li>
                        <li className="video-section-btn-item"><MdOutlineWatchLater className="video-section-btn-item-icn" onClick={()=>{
                            addWatchlater(token,actionDispatch,data);
                        }} /> <div className="video-section-btn-item-txt"> watch later</div></li>
                        <li className="video-section-btn-item" onClick={()=>{
                            setModal(true)
                        }}><RiPlayListAddLine className="video-section-btn-item-icn" /> <div className="video-section-btn-item-txt"> save</div></li>
                        {/* <li className="video-section-btn-item"></li> */}
                    </ul>
                </div>
                <div className="video-section-channel">
                    <div className="video-section-channe-snippet">
                        <img src={data.channelDetail.channelImg} alt="" className='video-section-channe-img' />
                        <div className="video-section-channel-desc">
                            <div className="video-section-channel-name">
                                {data.channelDetail.channelName}
                            </div>
                            <div className="video-section-channel-sub-count">
                                {/* {subCount} */}
                            </div>
                        </div>
                    </div>
                    <div className="video-section-channel-sub">
                        {
                            sub ? (
                                <button className="video-section-channel-unsub-btn" onClick={() => setSub(prev => prev = false)}>unsubscribe</button>

                            ) : (
                                <button className="video-section-channel-sub-btn" onClick={() => setSub(prev => prev = true)}>subscribe</button>

                            )
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default VideoDesc