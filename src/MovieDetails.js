import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from './axios'
import {getMovieDetails, getSimilarMovies} from './requests';
import './MovieDetails.css'
import Cast from './Cast'
import Row from './Row'
import Nav from './Nav'


const backdropURL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';
const mainPosterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const Details = (fetchUrl) => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [playLink, setPlayLink] = useState([]);
    const [similarMovieLink, setSimilarMovieLink] = useState([])

    useEffect(() => {
         async function getDetails() {
            let url = getMovieDetails(id);
            const response = await axios.get(url);
            setMovie(response.data)
            setPlayLink("https://fsapi.xyz/tmdb-movie/"+response.data.id)

            url = getSimilarMovies(id);
            setSimilarMovieLink(url);
        }
        getDetails();
        return movie;
    }, []);


    function getRuntime(runtime){
        let hr=0,m;
        while(runtime > 60){
            if (runtime - 60 >= 0){
                runtime-=60
                hr++
            }
        }
        m = runtime;
        return hr + " hr " + (m > 0 ? m + " min" : "")
    }

    return (
        <>
        <Nav />
            <div className="movie-details">
                <div className="movie-banner" style={{backgroundImage: `url(${backdropURL + movie.backdrop_path})`}}>
                    <div className="movie-content">
                        <div className="movie-poster">
                            {/* <img src={mainPosterURL + movie.poster_path} alt={movie.title} /> */}
                            <div className="movie-poster-img" style={{backgroundImage: `url(${mainPosterURL + movie.poster_path})`}}></div>
                        </div>
                        <div className="movie-info">
                            <h1 className="title">
                                {movie.title}
                            </h1>
                            <>{(movie.release_date) ? <span><b>{movie.release_date.split('-')[0]}</b></span> : <span></span>}</>
                            <span>{getRuntime(movie.runtime)}</span><br />
                            <span>{movie.vote_average}</span>
                            <div className="genres">
                                <b><>
                                {
                                    (movie.genres) ?
                                            (movie.genres).map((genre,i) => {
                                                let genreItem = <><span key={i} className='genre-item'>{genre.name}</span></> 
                                                return genreItem;
                                            }) : <span></span>
                                }
                                </></b>
                            </div>
                            <p className="overview">{movie.overview}</p>
                            <div className="banner_buttons">
                                <a href={playLink} target="_blank" rel="noopener noreferrer">
                                    <button className="banner_button">Play</button>
                                </a>
                                <button className="banner_button">Add to Watchlist</button>
                                <button className="banner_button">Mark as Played</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cast">
                    <Cast type={"movie"} id={movie.id} title="Main Cast"/>
                </div>
                <div className="other-movies-container">
                    <Row id={movie.id} title="Similar Movies" fetchUrl={similarMovieLink}/>
                </div>
            </div>
        </>
    )

}

export default Details;
