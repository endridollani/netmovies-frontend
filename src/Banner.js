import React , {useState, useEffect} from 'react';
import axios from './axios'
import { movieRequests, seriesRequests } from './requests';
import './Banner.css'

function Banner() {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(movieRequests.getTrendingMovies);
            setContent(
                request[Math.floor(Math.random() * request.length)]
            );
            return request; 
        }
        fetchData();
    }, [])

    function truncateOverview(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${content?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {content.title}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My WatchList</button>
                </div>
                <h1 className="banner_description">
                    {truncateOverview(content.overview, 150)}
                </h1>
                <div className="banner--fadeBottom" />
            </div>
        </header>
    )
}

export default Banner;
