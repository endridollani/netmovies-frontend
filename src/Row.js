import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'

function Row({title, fetchUrl}){
    const [content, setContent] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setContent(request.data); //not sure what the actual response structure is. Must check
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

    return( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => {
                    <img
                        key={id} 
                        className='row_poster' 
                        src={`${poster_baseURL}${movie.poster_path}`} 
                        alt={movie.name} 
                    />
                })}
            </div>
        </div>
    )
}

export default Row;