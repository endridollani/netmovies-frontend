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
        <div className="row-container">
        <div className="title-buttons px-3 pt-3 pb-0 .text-light"  style={{color: 'white'}}>
            <div className="title">
                <h4>{content.length > 0 ? `${title}` : ""}</h4>
            </div>
            <div className={title+"-buttons"} id="buttons"></div>
        </div>
        
        <div className="row_posters" id={title}>
            {content.filter(c => c.poster_path != null).map((movie, i) => {
                let image = 
                <Link to={`/${type}/${movie.id}`} key={movie+"-"+i}>
                    <div className="row_poster" title={movie.title || movie.name}>
                        <img
                            key={i+"-"+movie.id}
                            className='row_poster_img' 
                            src={`${(movie.poster_path) ? `${poster_baseURL}${movie.poster_path}` : ""}`} 
                            alt={movie.title || movie.name} 
                        />
                    </div>
                </Link>
                return image;
            })}
        </div>
        {(document.getElementById(`${title}`) && content.length > 0) ? 
            <NavButtons div={title} /> : ""
        }
        </div>
    )
}


export default Row;