import React,{useEffect,useRef} from 'react'
import "./header.css"
import {Link} from "react-router-dom"
import {BsYoutube} from "react-icons/bs"
import {GoSearch} from "react-icons/go"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import { useAction } from '../../context/actionContext'
import { CLEAR_SEARCH, SEARCH } from '../../constant/actionConstant'
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom'
// import { SideNav } from '../import'
// import { localStorage.setItem } from '../../utility/localStorage'
const Header = () => {
  const headerRef=useRef(null);
  const {filterState,filterDispatch,setSideNav,darkMode,setDarkMode}=useAction();
  const navigate=useNavigate();
  const {authState}=useAuth();
  const {searchX,setSearchX}=useAction();
  const {token}=authState;
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
     headerRef.current.style.backgroundColor = "#202020";
    }else{
      document.body.style.backgroundColor="initial";
      document.body.style.color="initial";
      headerRef.current.style.backgroundColor = "initial";

    }
  }, [darkMode]);
  useEffect(()=>{
    if (filterState.search!=="") {
      setSearchX(true);
    }else{
      setSearchX(false);
    }
  },[filterState.search,setSearchX])
  
// console.log(sideBar);
  return (
    <>

      <div className="nav-container" ref={headerRef}>
        <div className="nav-left-item-container">
      <div className="nav-menu" onClick={()=>setSideNav(prev=>prev=!prev)}><AiOutlineMenu style={{color:"inherit"}} /></div>  
         
<Link to={"/"} className="bui-link-nostyle" style={{color:"inherit"}}><div className="nav-logo"><BsYoutube className='mytube-icn'/> <span className="mytube-logo">MyTube</span></div></Link>

</div>           
        


        <div className="bui-input-icn-container bui-input-sm nav-search">
          <input type="text" className="bui-input nav-input" placeholder='search' value={filterState.search} onChange={(e)=>filterDispatch({type:SEARCH,payload:e.target.value})} onKeyPress={e=>{
            if (e.charCode===13) {
              navigate(`/search:${filterState.search}`);
            }
          }} />
            {
              searchX?<AiOutlineClose style={{backgroundColor:"initial",cursor:"pointer"}} onClick={()=>{
                filterDispatch({type:CLEAR_SEARCH})
                navigate("/",{replace:true})
              }}/>:""
            }
            <div className="input-icn ">
              <Link to={`/search:${filterState.search}`} style={{color:"inherit",marginLeft:"4px"}}><GoSearch/></Link>
            
            </div>
        </div>
        <ul className="nav-icn-list">
          {
            darkMode?<li className="nav-icon bui-link" onClick={()=>{
              setDarkMode(false)
              localStorage.setItem("darkmode",false);
            }}>
            <BsFillSunFill style={{color:"gold"}}/>
          </li>:<li className="nav-icon bui-link" onClick={()=>{
            setDarkMode(true)
            localStorage.setItem("darkmode",true);
          }}>
            <BsFillMoonStarsFill/>
          </li>
          }
          
          {
            token?<li className="nav-icon bui-link">
              <Link to={"/user"} className="bui-link-nostyle" style={{color:"inherit"}}>
            <CgProfile style={darkMode?{color:"white"}:{color:"black"}} />
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