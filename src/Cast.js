import React, {useState, useEffect} from 'react';
import axios from './axios'
import {getMovieCast, getSeriesCast} from './requests';
import './Cast.css'


const castImg = 'https://www.themoviedb.org/t/p/w138_and_h175_face';

const Cast = ({type, id, title}) => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            let url;
            if (type === "movie"){
                url = getMovieCast(id)
            }else{
                url = getSeriesCast(id)
            }
            const response = await axios.get(url)
            setCasts(response.data.cast)

            return response;
        }
        getCast();
    }, [type, id]);

    return (
        <div className="cast-container">
            <h2>{title}</h2>
            <div className="casts">
            {
                casts.map((item, i) => {
                    if(i < 8){
                        let castItem = <div key={i} className="cast-item">
                        <div className="cast-img" style={{backgroundImage: `url(${castImg + item.profile_path})`}}></div>
                        <p className="cast-name">{item.name}</p>
                        </div>

                        return castItem;
                    }
                    
                })
            }
        </div>
        </div>
    )
}

export default Cast; 