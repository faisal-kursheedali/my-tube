import { AUTH_ERROR, AUTH_LOADING_FALSE, AUTH_LOADING_TRUE, IS_LOGGEDIN, LOGOUT_USER, SET_STATUS_TRUE,SET_STATUS_FALSE, USER_CONFIRMPASSWORD, USER_EMAIL, USER_NAME, USER_PASSWORD, USER_TOKEN } from "../constant/authConstant";
import { authInitialState } from "../context/authContext";

const AuthReducer=(state,action)=>{
    switch (action.type) {

        case USER_EMAIL:{
            return state={
                ...state,
                email:action.payload
            }
        }
        case USER_NAME:{
            return state={
                ...state,
                name:action.payload
            }
        }
        
        case USER_PASSWORD:{
            return state={
                ...state,
                password:action.payload
            }
        }
        case USER_CONFIRMPASSWORD:{
            return state={
                ...state,
                confirmPassword:action.payload
            }
        }
        case USER_TOKEN:{
            return state={
                ...state,
                token:action.payload
            }
        }
        case AUTH_ERROR:{
            return state={
                ...state,
                error:action.payload
            }
        }
        case AUTH_LOADING_TRUE:{
            return state={
                ...state,
                loading:true,
            }
        }
        case AUTH_LOADING_FALSE:{
            return state={
                ...state,
                loading:false,
            }
        }
        case IS_LOGGEDIN:{
            return state={
                ...state,
                isLoggedin:action.payload,
            }
        }
        case LOGOUT_USER:{
            return state=authInitialState;
        }
        case SET_STATUS_TRUE:{
            return state={
                ...state,
                status:true,
            };
        }
        case SET_STATUS_FALSE:{
            return state={
                ...state,
                status:false,
            };
        }
        
        default:
            return state;
    }
}

export default AuthReducer;