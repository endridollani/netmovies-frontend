import {RETRIEVE_HISTORY, RETRIEVE_WATCHLIST, ADD_TO_HISTORY, ADD_TO_WATCHLIST} from '../Types';

const initialState=[];

const media=(state=initialState,action)=>{
    
    switch(action.type){
        case RETRIEVE_HISTORY:
            return action.payload;
        
        case RETRIEVE_WATCHLIST:
            return action.payload;

        case ADD_TO_HISTORY:
            const history_data=action.payload;
            return {...state,history_data};

        case ADD_TO_WATCHLIST:
            const watchlist_data=action.payload;
            return {...state,watchlist_data};

        default:
            return state;
    }
}


export default media;
