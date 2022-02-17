import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const add_series_to_history=(id)=>{
    return axios({
        'method':'PUT',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add/series/history/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const add_movie_to_history=(id)=>{
    return axios({
        'method':'PUT',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add/movie/history/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const remove_movie_from_history=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/delete/movie/history/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const remove_series_from_history=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/delete/series/history/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

export const add_movie_to_watchlist=(id)=>{
    return axios({
        'method':'PUT',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add/movie/watchlist/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const add_series_to_watchlist=(id)=>{
    return axios({
        'method':'PUT',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/add/series/watchlist/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const remove_movie_from_watchlist=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/delete/movie/watchlist/${id}`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}


export const remove_series_from_watchlist=(id)=>{
    return axios({
        'method':'DELETE',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/api/v1/delete/series/watchlist/${id}`,
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