import React from 'react';
import {useParams} from 'react-router'
import {getSearchMovies, getSearchSeries} from './requests';
import Grid from './Grid'
import Nav from './Nav'
import './Search.css'
import ChangeTitle from './ChangePageTitle'

const Results = () => {
   const {keyword} = useParams();
   let movies_url=getSearchMovies(keyword);
   let series_url=getSearchSeries(keyword);
   return(
           <>
           <ChangeTitle pageTitle={`"${keyword}" Search Results - Netmovies`} />
           <Nav />
           <div className="main search_results">
            <div className="movieSection">
                <Grid type="movie" title="Movie Results" fetchUrl={movies_url}></Grid>
            </div>
            <div className="seriesSection">
                <Grid type="series" title="Series Results" fetchUrl={series_url}/>
            </div>
           </div>
           </>
   )

}

export default Results;
