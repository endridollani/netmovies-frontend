import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Row({title, fetchUrl}){
    
    const [content, setContent] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const request = await axios.get(fetchUrl);
            setContent(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);


    return( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {content.map(movie => {
                    let image = <img
                        key={movie.id}
                        className='row_poster' 
                        src={`${poster_baseURL}${movie.poster_path}`} 
                        alt={movie.title || movie.name} 
                    />
                    return image;
                })}
            </div>
        </div>
    )
}

export default Row;