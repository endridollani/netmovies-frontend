import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import axios from './axios'
import './Row.css'

const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'


function Row({type, title, fetchUrl}){
    const [content, setContent] = useState([]);

    useEffect(()=>{ 
        const fetchData = async () =>{
            let request = await axios.get(fetchUrl);
            if(request.data){
                request = request.data;
                if(request.cast){
                    setContent(request.cast)
                }else{
                    setContent(request.results);
                }
            }else{
                setContent(request.results);
            }
            
        }
        fetchData();
    }, [fetchUrl]);

    return( 
        <>
        {(content.length > 0 ? 
            <div className="grid">
                <div className="title-buttons">
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                    <div className={title+"-buttons"} id="buttons"></div>
                </div>
                    
                <div className="grid_posters" id={title}>
                    {content.filter(e => e.poster_path != null).map((movie, i) => {
                        let image = 
                        <Link to={`/${type}/${movie.id}`} key={movie+"-"+i}>
                            <div className="grid_poster" title={(movie.title || movie.name) + " " + (movie.release_date ? `(${movie.release_date.split('-')[0]})` : "")}>
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
            </div> : "")}
        </>
    )
}


export default Row;