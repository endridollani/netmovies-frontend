import React, {useState, useEffect} from 'react';
import { getSeasonDetails } from './requests'
import axios from './axios'
import './Details.css'
import Nav from './Nav'
import {useParams} from 'react-router'
import EpisodeGrid from './EpisodeGrid'


const backdropURL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';
const mainPosterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const Details = () => {
    const {id, season} = useParams();
    const playLink = "https://fsapi.xyz/tv-tmdb/"+id+"-1-1";
    const [seasonData, setSeasonData] = useState([]);
    
    useEffect(()=>{ 
        const fetchData = async () =>{
            const url = getSeasonDetails(id, season);
            const request = await axios.get(url);
            setSeasonData(request.data);
            
        }
        fetchData();
    }, [id, season]);

    return (
        
        <>
        <Nav />
            <div className="movie-details" style={{backgroundImage: `url(${backdropURL + seasonData.poster_path})`}}>
                <header className="movie-banner">
                    <div className="movie-content">
                        <div className="movie-poster">
                            <div className="movie-poster-img" style={{backgroundImage: `url(${mainPosterURL + seasonData.poster_path})`}}></div>
                        </div>
                        <div className="movie-info">
                            <h1 className="title">
                                {seasonData.name}
                            </h1>
                            <>{(seasonData.air_date) ? <span><b>{seasonData.air_date}</b></span> : <span></span>}</>
                            {(seasonData.overview) ? <p className="overview">{seasonData.overview}</p> : ""}
                            <div className="banner_buttons">
                                <a href={playLink} target="_blank" rel="noopener noreferrer">
                                    <button className="banner_button">Play First Episode</button>
                                </a>
                                {/* <button className="banner_button">Mark Season as Played</button> */}
                            </div>
                        </div>
                    </div>
                </header>
                <div className="episodes">
                    {(seasonData.id) ? <EpisodeGrid id={id} seasonNr={season} seasonData={seasonData}></EpisodeGrid> : "" }
                </div>
            </div>
        </>
    )

}

export default Details;
