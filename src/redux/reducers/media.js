import {RETRIEVE_HISTORY, RETRIEVE_WATCHLIST, ADD_TO_HISTORY, ADD_TO_WATCHLIST} from '../Types';

const initialState=[];

const media=(state=initialState,action)=>{
    
    switch(action.type){
        case RETRIEVE_HISTORY:
            return action.payload;
        
        case RETRIEVE_WATCHLIST:
            return action.payload;

        case ADD_TO_HISTORY:
            const error=action.payload;
            return {...state,data};

        case ADD_TO_WATCHLIST:
            const error=action.payload;
            return {...state,data};

        default:
            return state;
    }
}


export default media;