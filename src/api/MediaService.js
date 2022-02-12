import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const add_to_history=(elements)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add-to-history/`,
        'data':elements,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const add_to_watchlist=(elements)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add-to-watchlist/`,
        'data':elements,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const retrieve_history=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/history/`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const retrieve_watchlist=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/watchlist/`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}