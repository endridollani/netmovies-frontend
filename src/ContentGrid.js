import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getMovieDetails, getSeriesDetails} from './requests';
import {fetchUserData} from './api/AuthenticationService'
import './ContentGrid.css'

const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'
function Grid({type, media, title}){

    const [content, setContent] = useState([]);

    useEffect(()=>{ 
        const fetchData = async () =>{
            let request;
            if (type === "history"){
                request = await fetchUserData();
                if(media === 'movie'){
                    request = request.data.historyMovies;
                }else{
                    request = request.data.historySeries;
                }
            }else{
                request = await fetchUserData();
                if(media === 'movie'){
                    request = request.data.watchlistMovies;
                }else{
                    request = request.data.watchlistSeries;
                }
                
                
            }
            
            let contentData = [];
            for(let i = 0; i < request.length; i++){
                console.log(request[i])
                let url;
                if(media === 'movie'){
                    url = getMovieDetails(request[i]);
                }else{
                    url = getSeriesDetails(request[i])
                }
                const el = await axios.get(url)
                contentData.push(el.data.results || el.data);
            }
            request.forEach(element => async ()  => {
                
            })
            setContent(contentData);
            
        }
        fetchData();
    }, [type, media]);


    function truncateTitle(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return(
        <div className="grid">
            <h3>{content.length > 0 ? `${title}` : ""}</h3>
            <div className="grid_posters">
                {content.map((el, i) => {
                    let image = 
                        <Link to={`/${(el.name ? "series" : "movie")}/${el.id}`} key={el.id+"-"+i}>
                            <div className="grid_poster">
                                    <div className="row_poster">
                                        <img
                                            key={i+"-"+el.id}
                                            className='row_poster_img' 
                                            src={`${poster_baseURL}${el.poster_path}`} 
                                            alt={el.title || el.name} 
                                        />
                                    </div>
                                <b><p>{truncateTitle(el.title || el.name, 10)}</p></b>
                            </div>
                        </Link>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Grid;