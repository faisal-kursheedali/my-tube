import React from 'react'
// import { useSelector } from 'react-redux';
// import { getReleatedVdo } from '../../../api';
// import { addData } from '../../../app/feature/releatedVdo';
// import FetchVedio from '../../../fetch';
import VideoReleatedCard from './video-releated-card';
import "./video-releated.css"

const VideoReleated = ({ data }) => {
    // const state=useSelector(state=>state.releatedVdo);
    // console.log(state);
    // console.log(getReleatedVdo(data));
    // console.log(addData);

    // FetchVedio(getReleatedVdo(data),addData);
    // const [value, setValue] = useState('');
    // console.log(getReleatedVdo(data));
    // useEffect(() => {
    //     setValue(prev=>prev=state.data)
    //     console.log(value);
    // }, [state]);
    return (
        <>

            <ul className="video-releated-list">
                {

                    data.map(i => {
                        console.log(i);
                        return (
                            <li className="video-releated-list-item" key={i._id}>
                                <VideoReleatedCard data={i} />
                            </li>)
           })
        }
            </ul>

        </>
    )
}

export default VideoReleated