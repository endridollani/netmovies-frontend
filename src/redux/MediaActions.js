import {RETRIEVE_HISTORY, RETRIEVE_WATCHLIST, ADD_TO_HISTORY, ADD_TO_WATCHLIST} from '../Types';
import mediaservice from '../api/MediaService'

export const retrieve_history= async(dispatch)=>{
   try{
    const res = await mediaservice.retrieve_history();

    dispatch({
        type: RETRIEVE_HISTORY,
        payload: res.data
    })
   }catch(err){
    console.log(err);
   }
}

export const retrieve_watchlist= async(dispatch)=>{
    try{
     const res = await mediaservice.retrieve_watchlist();
 
     dispatch({
         type: RETRIEVE_WATCHLIST,
         payload: res.data
     })
    }catch(err){
     console.log(err);
    }
 }

 export const add_to_history=(element) => async(dispatch)=> {
    try{
        const res = await mediaservice.add_to_history(element);

        dispatch({
            type: ADD_TO_HISTORY,
            payload: res.data
        });

        return Promise.resolve(res.data);
     
    }catch(err){
        return Promise.reject(err);
    }
 }

 export const add_to_watchlist=(element)=> async(dispatch)=> {
    try{
        const res = await mediaservice.add_to_watchlist(element);

        dispatch({
            type: ADD_TO_WATCHLIST,
            payload: res.data
        });

        return Promise.resolve(res.data);
     
    }catch(err){
        return Promise.reject(err);
    }
 }

 export const check_history=(element)=> async(dispatch)=> {
    try{
        const res = await mediaservice.check_history(element);
    
        dispatch({
            type: CHECK_HISTORY,
            payload: res.data
        })
    }catch(err){
        console.log(err);
    }
 }

 export const check_watchlist=(element)=> async(dispatch)=> {
    try{
     const res = await mediaservice.check_watchlist(element);
 
     dispatch({
         type: CHECK_WATCHLIST,
         payload: res.data
     })
    }catch(err){
     console.log(err);
    }
 }

 export const remove_from_history=(element)=> async(dispatch)=> {
     try{
        await mediaservice.remove_from_history(element);
        dispatch({
            type: REMOVE_FROM_HISTORY,
            payload: res.data
        })
     }catch(err){

     }
 }

 export const remove_from_watchlist=(element)=> async(dispatch)=> {
    try{
       await mediaservice.remove_from_watchlist(element);
       dispatch({
           type: REMOVE_FROM_WATCHLIST,
           payload: res.data
       })
    }catch(err){

    }
}