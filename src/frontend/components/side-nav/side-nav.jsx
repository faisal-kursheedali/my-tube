import React,{useRef,useEffect} from 'react'
import "./side-nav.css";
import {AiFillHome,AiTwotoneLike} from "react-icons/ai"
import {RiLogoutBoxFill,RiLoginBoxFill} from "react-icons/ri"
import {FaHistory} from "react-icons/fa"
import {RiPlayList2Fill} from "react-icons/ri"
import {MdWatchLater} from "react-icons/md"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from '../../context/authContext';
// import { LOGOUT_USER } from '../../constant/authConstant';
import { useAction } from '../../context/actionContext';
// import { sideBar,setSideBar } from '../header/header.jsx';
const SideNav = () => {
    const {authState}=useAuth();
    const {darkMode}=useAction();
    const {token}=authState;
    const navigate =useNavigate();
    const sideNavRef=useRef(null)
//     const [show,setShow]=useState();
//     if (window.innerWidth >= 425) {
//         setShow(sideBar)
//     }else{
//         setShow(true)
//     }
useEffect(() => {
    if (darkMode) {
        sideNavRef.current.style.backgroundColor = "#202020";
    } else {
        sideNavRef.current.style.backgroundColor = "initial";
    }
},[darkMode]);

  return(
  <div className="side-nav" ref={sideNavRef}>
        <ul className="side-nav-list bui-list">
            <li className="side-nav-item">
                <Link className='side-nav-link' to="/">
            <AiFillHome className="side-nav-icn"/>
            <span className="nav-item-txt" >Home</span></Link>
                </li>
            <li className="side-nav-item">
                <Link className='side-nav-link' to="/like">
            <AiTwotoneLike className="side-nav-icn"/>
            <span className="nav-item-txt">Like</span></Link>
                </li>
            <li className="side-nav-item">
            <Link className='side-nav-link' to="/watchlater">
            <MdWatchLater className="side-nav-icn"/>
            <span className="nav-item-txt">Watch later</span></Link>
               </li>
            <li className="side-nav-item">
            <Link className='side-nav-link' to="/history">
            <FaHistory className="side-nav-icn"/>
            <span className="nav-item-txt">History</span></Link>
                </li>
            <li className="side-nav-item">
            <Link className='side-nav-link' to="/playlist">
            <RiPlayList2Fill className="side-nav-icn"/>
            <span className="nav-item-txt">playlist</span></Link>
                </li>
                {
                    // console.log(token)
                }
                {
                  token?(<li className="side-nav-item side-nav-last-item" onClick={()=>{
                    // authDispatch({
                    //     type:LOGOUT_USER
                    // })
                    navigate("/user")
                }}>
                <RiLogoutBoxFill className="side-nav-icn"/>
                <span className="nav-item-txt">Log out</span>
                    
                    </li>):(<li className="side-nav-item side-nav-last-item" onClick={()=>{navigate("/login",{
                        replace:true
                    })}}>
                
            <RiLoginBoxFill className="side-nav-icn"/>
            <span className="nav-item-txt">Log IN</span>
                
                </li>)  
                }
            
                
        </ul>
    </div>)
  
}

export default SideNav