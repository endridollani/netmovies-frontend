import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from './axios'
import {getMovieDetails, getSimilarMovies} from './requests';
import './Details.css'
import Cast from './Cast'
import Row from './Row'
import Nav from './Nav'
import ChangeTitle from './ChangePageTitle'
import { connect } from "react-redux";
import { add_movie_to_history, add_movie_to_watchlist, remove_movie_from_history, remove_movie_from_watchlist} from './api/MediaService';
import { fetchUserData } from './api/AuthenticationService';

const backdropURL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';
const mainPosterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

export const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [playLink, setPlayLink] = useState([]);
    const [similarMovieLink, setSimilarMovieLink] = useState([])
    const [watchlistBtn, setWatchlistBtn] = useState('Add to Watchlist');
    const [historyBtn, setHistoryBtn] = useState('Mark as Played');

    useEffect(() => {
         async function getDetails() {
            let url = getMovieDetails(id);
            const response = await axios.get(url);
            setMovie(response.data)
            setPlayLink("https://fsapi.xyz/tmdb-movie/"+response.data.id)

            //Url for similar movies
            url = getSimilarMovies(id);
            setSimilarMovieLink(url);

            let userData = await fetchUserData();

            //Api call if movie is in history
            const history_res = userData.data.historyMovies.filter(e => e === id);
            if(history_res.length > 0){
                setHistoryBtn('Mark as Unplayed')
            }else{
                setHistoryBtn('Mark as Played')
            }
            //Api call if movie is in watchlist
            const watchlist_res = userData.data.watchlistMovies.filter(e => e === id);
            if(watchlist_res.length > 0){
                setWatchlistBtn('Remove from Watchlist')
            }else{
                setWatchlistBtn('Add to Watchlist')
            }
            window.scrollTo(0,0);
        }
        getDetails();
    }, [id]);


    function getRuntime(runtime){
        let hr=0,m;
        while(runtime > 60){
            if (runtime - 60 >= 0){
                runtime-=60
                hr++
            }
        }
        m = runtime;
        return (hr > 0 ? hr + " hr ": "") + (m > 0 ? m + " min" : "")
    }

    const handleHistoryBtn = async (id) => {
        let text = document.getElementById('add-history-btn').innerHTML;
        switch (text) {
            case 'Mark as Played':
                try{
                    await add_movie_to_history(id);
                    setHistoryBtn('Mark as Unplayed')
                }catch(err){
                    console.log(err);
                }
                break;
            case 'Mark as Unplayed':
                try{
                    await remove_movie_from_history(id);
                    setHistoryBtn('Mark as Played')
                }catch(err){
                    console.log(err);
                }
                break;
            default:
                window.location.reload(false);
                break;
        }
    }

    const handleWatchlistBtn = async (id) => {
        let text = document.getElementById('add-watchlist-btn').innerHTML;
        switch (text) {
            case 'Add to Watchlist':
                try{
                    await add_movie_to_watchlist(id);
                    setWatchlistBtn('Remove from Watchlist')
                }catch(err){
                    console.log(err);
                }
                break;
            case 'Remove from Watchlist':
                try{
                    await remove_movie_from_watchlist(id);
                    setWatchlistBtn('Add to Watchlist')
                }catch(err){
                    console.log(err);
                }
                break;
            default:
                window.location.reload(false);
                break;
        }
    }
    
    return (
        <>
        <ChangeTitle pageTitle={`${movie?.title} - Netmovies`} />
        <Nav />
            <div className="movie-details" style={{backgroundImage: `url(${(movie.backdrop_path ? `${backdropURL + movie.backdrop_path}` : "")})`}}>
                <header className="movie-banner" >
                    <div className="movie-content">
                        <div className="movie-poster">
                            <div className="movie-poster-img" style={{backgroundImage: `url(${(movie.poster_path ? `${mainPosterURL + movie.poster_path}` : ``)})`}}></div>
                        </div>
                        <div className="movie-info">
                            <h3 className="title">
                                {movie.title}
                            </h3>
                            <>{(movie.release_date) ? <span><b>{movie.release_date.split('-')[0]}</b></span> : <span></span>}</>
                            <span>{getRuntime(movie.runtime)}</span><br />
                            <span>{(movie.vote_average > 0 ? movie.vote_average : "")}</span>
                            <div className="genres">
                                <>
                                {
                                    (movie.genres) ?
                                            (movie.genres).map((genre,i) => {
                                                let genreItem = <b key={i} ><span className='genre-item'>{genre.name}</span></b>
                                                return genreItem;
                                            }) : ""
                                }
                                </>
                            </div>
                            <p className="overview">{movie.overview}</p>
                            <div className="banner_buttons">
                                <a href={playLink} target="_blank" rel="noopener noreferrer">
                                    <button className="banner_button">Play</button>
                                </a>
                                <button onClick={() => handleWatchlistBtn(movie.id)} className="banner_button" id="add-watchlist-btn">{watchlistBtn}</button>
                                <button onClick={() => handleHistoryBtn(movie.id)} className="banner_button" id="add-history-btn">{historyBtn}</button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="cast">
                    <Cast type={"movie"} id={movie.id} title="Main Cast"/>
                </div>
                <div className="other-movies-container">
                    <Row type="movie" id={movie.id} title="Similar Movies" fetchUrl={similarMovieLink}/>
                </div>
            </div>
        </>
    )

}

export default connect(null , {add_movie_to_history,
    add_movie_to_watchlist, remove_movie_from_history, remove_movie_from_watchlist
  })(Details);
