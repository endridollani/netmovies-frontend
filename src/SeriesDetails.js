import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from './axios'
import {getSeriesDetails, getSimilarSeries} from './requests';
import './Details.css'
import Cast from './Cast'
import Row from './Row'
import SeasonRow from './SeasonRow'
import Nav from './Nav'
import ChangeTitle from './ChangePageTitle'
import { connect } from "react-redux";
import { add_to_history, add_to_watchlist, check_history, check_watchlist , remove_from_history, remove_from_watchlist} from './api/MediaService';


const backdropURL = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';
const mainPosterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

export const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [playLink, setPlayLink] = useState([]);
    const [similarMovieLink, setSimilarMovieLink] = useState([])
    const [watchlistBtn, setWatchlistBtn] = useState('Add to Watchlist');
    const [historyBtn, setHistoryBtn] = useState('Add to History');

    useEffect(() => {
         async function getDetails() {
            let url = getSeriesDetails(id);
            const response = await axios.get(url);
            setMovie(response.data)
            setPlayLink("https://fsapi.xyz/tv-tmdb/"+response.data.id+"-1-1")

            url = getSimilarSeries(id);
            setSimilarMovieLink(url);

            //Api call if movie is in history
            const history_res = await check_history(id);
            console.log(history_res)
            if(history_res){
                setHistoryBtn('Mark as Unplayed')
            }
            //Api call if movie is in watchlist
            const watchlist_res = await check_watchlist(id);
            console.log(watchlist_res)
            if(watchlist_res){
                setHistoryBtn('Remove from Watchlist')
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
            case 'Add to History':
                try{
                    await add_to_history(id);
                    setWatchlistBtn('Mark as Unplayed')
                }catch(err){
                    console.log(err);
                }
                break;
            case 'Mark as Unplayed':
                try{
                    await remove_from_history(id);
                    setWatchlistBtn('Add to History')
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
                    await add_to_history(id);
                    setWatchlistBtn('Remove from Watchlist')
                }catch(err){
                    console.log(err);
                }
                break;
            case 'Remove from Watchlist':
                try{
                    await remove_from_watchlist(id);
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
        <ChangeTitle pageTitle={`${movie.name} - Netmovies`} />
        <Nav />
        <div className="movie-details" style={{backgroundImage: `url(${(movie.backdrop_path ? `${backdropURL + movie.backdrop_path}` : "")})`}}>
                <header className="movie-banner" >
                    <div className="movie-content">
                        <div className="movie-poster">
                            <div className="movie-poster-img" style={{backgroundImage: `url(${(movie.poster_path ? `${mainPosterURL + movie.poster_path}` : ``)})`}}></div>
                        </div>
                        <div className="movie-info">
                            <h1 className="title">
                                {movie.name}
                            </h1>
                            <>{(movie.first_air_date) ? <span><b>{movie.first_air_date.split('-')[0]}</b></span> : <span></span>}</>
                            <span>{getRuntime(movie.episode_run_time)}</span><br />
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
                                    <button className="banner_button">Play First Episode</button>
                                </a>
                                <button onClick={() => handleWatchlistBtn(movie.id)} className="banner_button" id="add-watchlist-btn">{watchlistBtn}</button>
                                <button onClick={() => handleHistoryBtn(movie.id)} className="banner_button" id="add-history-btn">{historyBtn}</button>
                             </div>
                        </div>
                    </div>
                </header>
                <div className="seasons">
                  <>
                  {
                    (movie.seasons) ? <SeasonRow id={movie.id} title="Seasons" seriesData={movie}></SeasonRow> : ""
                  }
                  </>
                </div>
                <div className="cast">
                    <Cast type={"series"} id={movie.id} title="Main Cast"/>
                </div>
                <div className="other-movies-container">
                    <Row type="series" id={movie.id} title="Similar Series" fetchUrl={similarMovieLink}/>
                </div>
            </div>
        </>
    )

}

export default connect(null, {add_to_history,
    add_to_watchlist, remove_from_history, remove_from_watchlist
  })(Details);
