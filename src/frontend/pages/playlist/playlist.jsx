import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAction } from '../../context/actionContext';
import "./playlist.css";

const Playlist = () => {
    const { actionState } = useAction();
    const { playlistData } = actionState;
    const navigate = useNavigate();
    console.log(playlistData);
    return (
        <div className="playlist-container" >
            {
                playlistData ? (
                    playlistData.map(i => {
                        return (
                            <div className="single-playlist" key={i._id} >
                                <Link state={
                                    { data: i.videos[0],
                                        playlistVdo:i.videos
                                    }
                                } to={i.videos.length>0?`/video:${i._id}`:""}
                                className="single-playlist-box"
                                >
                                    {
                                        i.videos.length>0?<img src={i.videos[0].contentDetail.thumbnail} alt="" className='single-playlist-box-img'/>:<img src="https://developers.google.com/site-assets/logo-youtube.svg" alt="" className='single-playlist-box-img' />
                                    }
                                    <div className="sinple-playlist-content">
                                        <div className="single-playlist-content-title">{i.title}</div>
                                        <div className="single-playlist-content-desc">{i.description}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                ) : ("")
            }
        </div>
    )
}

export default Playlist