import React , {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import axios from './axios'
import {getPersonMovieCredits, getPersonSeriesCredits, getPersonDetails} from './requests';
import './Details.css'
import Grid from './Grid'
import Nav from './Nav'
import ChangeTitle from './ChangePageTitle'

const PersonDetails = () => {
    const {id} = useParams();
    const [person, setPerson] = useState([]);

    const mainProfileUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'
    const movies_url=getPersonMovieCredits(id);
    const series_url=getPersonSeriesCredits(id);

    useEffect(() => {
         async function getDetails() {
            let url = getPersonDetails(id);
            const response = await axios.get(url);
            setPerson(response.data)
            window.scrollTo(0,0);
        }
        getDetails();
    }, [id]);

    function truncateBiography(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }
    
    return (
        <>
        <ChangeTitle pageTitle={`${person?.name} - Netmovies`} />
        <Nav />
        <div className="movie-details">
                <header className="movie-banner" >
                    <div className="movie-content">
                        <div className="movie-poster">
                            <div className="movie-poster-img" style={{backgroundImage: `url(${(person.profile_path ? `${mainProfileUrl + person.profile_path}` : ``)})`}}></div>
                        </div>
                        <div className="movie-info">
                            <h3 className="title">
                                {person.name}
                            </h3>
                            <>{(person.birthday) ? <span><b>{person.birthday.split('-')[0]}</b></span> : <span></span>}</>
                            <span>{(person.gender === '1' ? "Female" : "Male")}</span><br />
                            <span>{person.known_for_department}</span>
                            <br />
                            <span>{person.place_of_birth}</span>
                            <p className="overview">{truncateBiography(person.biography, 700)}</p>
                        </div>
                    </div>
                </header>
                <div className="movieSection">
                    <Grid type="movie" title="Movie Credits" fetchUrl={movies_url}></Grid>
                </div>
                <div className="seriesSection">
                    <Grid type="series" title="Series Credits" fetchUrl={series_url}/>
                </div>
            </div>
        </>
    )

}

export default PersonDetails;