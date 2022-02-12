import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import axios from './axios'
import './Row.css'
import NavButtons from './NavButtons'

const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'


function Row({type, title, fetchUrl}){
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
        <div className="grid">
            <div className="title-buttons">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className={title+"-buttons"} id="buttons"></div>
            </div>
            
            <div className="grid_posters" id={title}>
                {content.map((movie, i) => {
                    let image = 
                    <Link to={`/${type}/${movie.id}`} key={movie+"-"+i}>
                        <div className="grid_poster">
                            <img
                                key={i+"-"+movie.id}
                                className='grid_poster_img' 
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