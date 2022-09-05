import React from 'react'
import "./sideNavMenu.css"
import {AiFillHome,AiFillLike} from "react-icons/ai"
import {FaHistory} from "react-icons/fa"
import {RiPlayList2Fill} from "react-icons/ri"
import {MdWatchLater} from "react-icons/md"
import {BsYoutube} from "react-icons/bs"
import {BiLogIn,BiLogOut} from "react-icons/bi"
import { useAuth } from '../../context/authContext'
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useAction } from '../../context/actionContext'

const SideNavMenu = () => {
  const {authState}=useAuth();
  const {token}=authState;
  const  {darkMode,setDarkMode}=useAction();
  return (
    <div className="side-nav-menu-container">
      <Link to={"/"} style={{textDecoration:"none",color:"initial"}}>
      <div className="side-nav-menu-logo">
          <BsYoutube className="side-nav-menu-logo-icn"/>
        <div className="side-nav-menu-logo-brand">MyTube</div>
      </div></Link>
      <hr/>
     <ul className="side-nav-menu-list">
      <li>
      <Link className="side-nav-menu-list-item"  to={"/"}>
      

        <div className="side-nav-menu-list-item-icn">
          <AiFillHome/>
        </div>
        <div className="side-nav-menu-list-item-name">Home</div>
      </Link>
      </li>
      <li>
      <Link className="side-nav-menu-list-item"  to={"/like"}>
      <div className="side-nav-menu-list-item-icn">
          <AiFillLike/>
        </div>
        <div className="side-nav-menu-list-item-name">AiFillLike</div>
      </Link>
      </li>
      <hr/>
      <li>
      <Link className="side-nav-menu-list-item"  to={"/watchlater"}>
      <div className="side-nav-menu-list-item-icn">
          <MdWatchLater/>
        </div>
        <div className="side-nav-menu-list-item-name">watch later</div>
      </Link>
      </li>
      <li>
      <Link className="side-nav-menu-list-item"  to={"/history"}>
      <div className="side-nav-menu-list-item-icn">
          <FaHistory/>
        </div>
        <div className="side-nav-menu-list-item-name">History</div>
      </Link>
      </li>
      <li>
      <Link className="side-nav-menu-list-item"  to={"/playlist"}>
      <div className="side-nav-menu-list-item-icn">
          <RiPlayList2Fill/>
        </div>
        <div className="side-nav-menu-list-item-name">playlist</div>
      </Link>
      </li>
      <hr/>
      {
            darkMode?<li className="side-nav-menu-list-item"  onClick={()=>{
              setDarkMode(false)
              localStorage.setItem("darkmode",false);
            }}>
              <div className="side-nav-menu-list-item-icn">
            <BsFillSunFill style={{color:"gold"}}/></div>
            <div className="side-nav-menu-list-item-name"  style={{color:"gold"}}>Light mode</div>
          </li>:<li className="side-nav-menu-list-item" onClick={()=>{
              setDarkMode(true)
              localStorage.setItem("darkmode",false);
            }}>
              <div className="side-nav-menu-list-item-icn" >
            <BsFillMoonStarsFill style={{color:"initial"}}/></div>
            <div className="side-nav-menu-list-item-name">Dark mode</div>
          </li>
    }
      {
      token?(
        <li>
          <Link className="side-nav-menu-list-item"  to={"/user"}>
        <div className="side-nav-menu-list-item-icn">
            <BiLogOut/>
          </div>
          <div className="side-nav-menu-list-item-name">Logout</div>
        {/* <li> */}
        </Link>
        </li>
          ):(
          <li>
            <Link className="side-nav-menu-list-item"  to={"/login"}>
              {/* 2</li> */}
        <div className="side-nav-menu-list-item-icn">
            <BiLogIn/>
          </div>
          <div className="side-nav-menu-list-item-name">Login</div>
        </Link>
        </li>
        )
      }
      
     </ul>
    </div>
  )
}

export default SideNavMenu