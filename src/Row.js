import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
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
        <div className="row">
            <div className="title-buttons">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className={title+"-buttons"} id="buttons"></div>
            </div>
            
            <div className="row_posters" id={title}>
                {content.map(movie => {
                    let image = 
                    <Link to={`/${type}/${movie.id}`}>
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
            {(document.getElementById(`${title}`)) ? 
                    ReactDOM.render(
                        <NavButtons div={title} />, document.getElementsByClassName(`${title}-buttons`)[0]
                    )
                    : ""
                    }
        </div>
    )
}

export default Row;