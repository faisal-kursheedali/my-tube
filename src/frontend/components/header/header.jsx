import React,{useEffect} from 'react'
import "./header.css"
import {Link} from "react-router-dom"
import {BsYoutube} from "react-icons/bs"
import {GoSearch} from "react-icons/go"
import {AiOutlineMenu} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import { useAction } from '../../context/actionContext'
import { SEARCH } from '../../constant/actionConstant'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../utility/localStorage'
const Header = () => {
  const {filterState,filterDispatch,setSideNav,darkMode,setDarkMode}=useAction();
  const navigate=useNavigate();
  const {authState}=useAuth();
  const {token}=authState;
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }else{
      document.body.style.backgroundColor="initial";
      document.body.style.color="initial";

    }
  }, [darkMode]);
  
// console.log(sideBar);
  return (
    <>

      <div className="nav-container">
        <div className="nav-left-item-container">
      <div className="nav-menu" onClick={()=>setSideNav(prev=>prev=!prev)}><AiOutlineMenu style={{color:"inherit"}} /></div>  
         
<Link to={"/"} className="bui-link-nostyle" style={{color:"inherit"}}><div className="nav-logo"><BsYoutube className='mytube-icn'/> <span className="mytube-logo">MyTube</span></div></Link>

</div>           
        


        <div class="bui-input-icn-container bui-input-sm nav-search">
          <input type="text" class="bui-input nav-input" placeholder='search' value={filterState.search} onChange={(e)=>filterDispatch({type:SEARCH,payload:e.target.value})} />
            <div class="input-icn ">
              <Link to={`/search:${filterState.search}`}><GoSearch/></Link>
            
            </div>
        </div>
        <ul className="nav-icn-list">
          {
            darkMode?<li className="nav-icon bui-link" onClick={()=>{
              setDarkMode(false)
              setLocalStorage("darkmode",false);
            }}>
            <BsFillSunFill style={{color:"gold"}}/>
          </li>:<li className="nav-icon bui-link" onClick={()=>{
            setDarkMode(true)
            setLocalStorage("darkmode",true);
          }}>
            <BsFillMoonStarsFill/>
          </li>
          }
          
          {
            token?<li className="nav-icon bui-link">
              <Link to={"/user"} className="bui-link-nostyle" style={{color:"inherit"}}>
            <CgProfile />
            </Link>
          </li>:(<li className="nav-icon bui-link">
            <button className="bui-btn-fancy" style={{padding:"4px 8px" ,margin:"0px 1rem"}}  onClick={()=>navigate("/login",{
            replace:true
          })}>LOGIN</button>
          </li>)
          }
          
        </ul>

      </div>

    </>
  )
}


export default Header