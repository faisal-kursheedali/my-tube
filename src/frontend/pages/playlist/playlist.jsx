import React from 'react'
import { Link} from 'react-router-dom';
import { useAction } from '../../context/actionContext';
import "./playlist.css";
import empty from "../../assets/empty.svg";

const Playlist = () => {
    const { actionState } = useAction();
    const { playlistData } = actionState;
    // console.log(playlistData);
    return (
        <>
            {
                playlistData.length > 0 ? (
                    playlistData.map(i => {
                        return (
                            <div className="playlist-container" >
                                <div className="single-playlist" key={i._id} >
                                    <Link state={
                                        {
                                            data: i.videos[0],
                                            playlistVdo: i.videos
                                        }
                                    } to={i.videos.length > 0 ? `/video:${i._id}` : ""}
                                        className="single-playlist-box"
                                    >
                                        {
                                            i.videos.length > 0 ? <img src={i.videos[0].contentDetail.thumbnail} alt="" className='single-playlist-box-img' /> : <img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className='single-playlist-box-img' />
                                        }
                                        <div className="sinple-playlist-content">
                                            <div className="single-playlist-content-title">{i.title}</div>
                                            <div className="single-playlist-content-desc">{i.description}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                ) : (<div className="img-for-empty-content-container">
                    <img src={empty} alt="" className='img-for-empty-content' />
                </div>)
            }
        </>
    )
}

export default Playlist