import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from './axios'
import {getMovieCast, getSeriesCast, getSearchPerson} from './requests';
import './Cast.css'


const castImg = 'https://www.themoviedb.org/t/p/w138_and_h175_face';

const Cast = ({type, id, title}) => {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            let url;
            if (type === "movie"){
                url = getMovieCast(id)
            }else if (type === 'series'){
                url = getSeriesCast(id)
            }else{
                url = getSearchPerson(id);
            }
            const response = await axios.get(url)
            console.log(response)
            if(response.data.results){
                setCasts(response.data.results)
            }else{
                setCasts(response.data.cast)
            }

            return response;
        }
        getCast();
    }, [type, id]);

    return (
        <div className="cast-container">
            <h4>{title}</h4>
            <div className="casts">
            {
                casts.filter(c=> c.profile_path != null).map((item, i) => {
                    if(i < 8){
                        let castItem = 
                        <Link to={`/person/${item.id}`} key={item+"-"+i}>
                            <div key={i} className="cast-item">
                                <div className="cast-img" style={{backgroundImage: `url(${castImg + item.profile_path})`}}></div>
                                <p className="cast-name">{item.name}</p>
                            </div>
                        </Link>
                        return castItem;
                    }
                    return null;
                })
            }
        </div>
        </div>
    )
}

export default Cast; 