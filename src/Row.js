import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from './axios'
import './Row.css'
const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Row({title, fetchUrl}){
    const [content, setContent] = useState([]);

    useEffect(()=>{ 
        const fetchData = async () =>{
            const request = await axios.get(fetchUrl);
            if(request.data){
                setContent(request.data.results);
            }else{
                setContent(request.results);
            }
            
        }
        fetchData();
    }, [fetchUrl]);


    return( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {content.map(movie => {
                    let image = 
                    <Link to={`/movie/${movie.id}`}>
                        <div className="row_poster">
                            <img
                                key={movie.id}
                                className='row_poster_img' 
                                src={`${poster_baseURL}${movie.poster_path}`} 
                                alt={movie.title || movie.name} 
                            />
                        </div>
                    </Link>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Row;