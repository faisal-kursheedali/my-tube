import "./App.css";
import {useEffect} from "react"
import { useAuth } from "./frontend/context/authContext";
import { SET_STATUS_TRUE, USER_TOKEN } from "./frontend/constant/authConstant";
import { getLocalStorage } from "./frontend/utility/localStorage";
import { getLikedVdo } from "./frontend/services/likedVdoData";
import { getHistory } from "./frontend/services/historyData";
import { getWatchlater } from "./frontend/services/watchlaterData";
import PgRoute from "./frontend/routes/pgRoute";


function App() {
  const token = getLocalStorage("token");
  const {authDispatch}=useAuth();
  useEffect(() => {
    if (token) {
      authDispatch({
        type:USER_TOKEN,
        payload:token
      });
      authDispatch({
        type:SET_STATUS_TRUE
      })
      getLikedVdo();
      getHistory();
      getWatchlater();
    }
  }, [token]);
  return (
    <div className="App">
      <PgRoute/>
    </div>       
  );
}

export default App;
