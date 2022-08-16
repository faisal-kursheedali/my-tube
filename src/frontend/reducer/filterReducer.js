import { CLEAR_SEARCH, SEARCH } from "../constant/actionConstant";

const filterReducer=(state,action)=>{
    switch (action.type) {
        case SEARCH:{
            return state={
                ...state,
                search:action.payload
            }
        }
        case CLEAR_SEARCH:{
            return state={
                ...state,
                search:""
            }
        }
        
            
        
    
        default:{
            return state={
                search:""
            }
        }
    }
}

export default filterReducer;