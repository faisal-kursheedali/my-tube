import "./App.css";
import {useEffect} from "react"
// import { useAuth } from "./frontend/context/authContext";
// import { SET_STATUS_TRUE, USER_TOKEN } from "./frontend/constant/authConstant";
// import { getLocalStorage } from "./frontend/utility/localStorage";
// import { getLikedVdo } from "./frontend/services/likedVdoData";
// import { getHistory } from "./frontend/services/historyData";
// import { getWatchlater } from "./frontend/services/watchlaterData";
import PgRoute from "./frontend/routes/pgRoute";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header, SideNav, SideNavMenu } from "./frontend/components/import";
import { useAuth } from "./frontend/context/authContext";
import { LOAD_AUTH } from "./frontend/constant/authConstant";
import { useAction } from "./frontend/context/actionContext";


function App() {
  // const token = getLocalStorage("token");
  // const {authDispatch}=useAuth();
  // useEffect(() => {
  //   if (token) {
  //     authDispatch({
  //       type:USER_TOKEN,
  //       payload:token
  //     });
  //     authDispatch({
  //       type:SET_STATUS_TRUE
  //     })
  //     getLikedVdo();
  //     getHistory();
  //     getWatchlater();
  //   }
  // }, [token]);
  const {authDispatch}=useAuth();
  const {sideNav,setSideNav,darkMode}=useAction();
  useEffect(()=>{
    authDispatch({
      type:LOAD_AUTH
    })
  })
  return (
    <div className="App">
      <Router>
      <div className="nav-container-space">
        {/* <Nav/> */}
        <Header/>
      </div>
      <div className="main-content" onClick={()=>setSideNav(false)}>
        {console.log(darkMode)}
{
  sideNav?darkMode?(<div className="side-nav-menu" style={{backgroundColor:"gray"}} ><SideNavMenu/></div>):(<div className="side-nav-menu" style={{backgroundColor:"lightgray"}} ><SideNavMenu/></div>):""
}
      
      <div className="side-nav-container">
        <SideNav/>
      </div>
      <div className="side-mainpg-container">

      <PgRoute/>
      </div>
      </div>
      </Router>
      
    </div>       
  );
}

export default App;
