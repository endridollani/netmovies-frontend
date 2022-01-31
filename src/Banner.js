import React , {useState, useEffect} from 'react';
import axios from './axios'
import {defaultRequests} from './requests';
import './Banner.css'

function Banner() {
    const [content, setContent] = useState([]);
    const [playLink, setPlayLink] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            let request = await axios.get(defaultRequests.getTrending);
            request = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            if(request.hasOwnProperty('name')){
                setPlayLink("https://fsapi.xyz/tv-tmdb/"+request.id+"-1-1")
            }else{
                setPlayLink("https://fsapi.xyz/movie-tmdb/"+request.id)
            }

            setContent(
                request
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
                    {content.title || content.name}
                </h1>
                <div className="banner_buttons">
                    <a href={playLink} target="_blank" rel="noopener noreferrer">
                        <button className="banner_button">Play</button>
                    </a>
                    <button className="banner_button">My WatchList</button>
                </div>
                <h1 className="banner_description">
                    {truncateOverview(content.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
