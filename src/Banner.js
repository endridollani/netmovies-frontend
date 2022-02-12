import React , {useState, useEffect} from 'react';
import axios from './axios'
import {Link} from 'react-router-dom'
import {defaultRequests} from './requests';
import './Banner.css'

function Banner() {
    const [content, setContent] = useState([]);
    const [type, setType] = useState([]);
    const [playLink, setPlayLink] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            let request = await axios.get(defaultRequests.getTrending);
            request = request.data.results[Math.floor(Math.random() * request.data.results.length)];
            setContent(request);
            
            if(request.hasOwnProperty('name')){
                setPlayLink("https://fsapi.xyz/tv-tmdb/"+request.id+"-1-1")
                setType('series');
            }else{
                setPlayLink("https://fsapi.xyz/tmdb-movie/"+request.id)
                setType('movie');
            }
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
                    "${content.backdrop_path ? `https://image.tmdb.org/t/p/original/${content.backdrop_path}` : ""}"
                )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {
                        <Link to={`/${type}/${content.id}/`} style={{color: '#FFF',textDecoration: 'none'}}>
                            {content.title || content.name}
                        </Link>
                    }
                </h1>
                <h1 className="banner_description">
                    {truncateOverview(content.overview, 150)}
                </h1>
                <div className="banner_buttons">
                    <a href={playLink} target="_blank" rel="noopener noreferrer">
                        <button className="banner_button">Play</button>
                    </a>
                    <button className="banner_button">My WatchList</button>
                </div>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
