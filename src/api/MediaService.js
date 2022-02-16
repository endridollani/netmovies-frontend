import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const add_to_history=(id)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add-to-history/`,
        'data':id,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const remove_from_history=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/remove-from-history/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const add_to_watchlist=(id)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add-to-watchlist/`,
        'data':id,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const remove_from_watchlist=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/remove-from-watchlist/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

// export const check_history=(id)=> {
//     return axios({
//         method:'GET',
//         url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/history/${id}`,
//         headers:{
//             'Authorization':'Bearer '+getToken()
//         }
//     })
// }

// export const retrieve_history=()=>{
//     return axios({
//         method:'GET',
//         url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/history/`,
//         headers:{
//             'Authorization':'Bearer '+getToken()
//         }
//     })
// }

// export const retrieve_watchlist=()=>{
//     return axios({
//         method:'GET',
//         url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/watchlist/`,
//         headers:{
//             'Authorization':'Bearer '+getToken()
//         }
//     })
// }

// export const check_watchlist=(id)=> {
//     return axios({
//         method:'GET',
//         url:`${process.env.hostUrl||'http://localhost:8080'}/api/v1/watchlist/${id}`,
//         headers:{
//             'Authorization':'Bearer '+getToken()
//         }
//     })
// }