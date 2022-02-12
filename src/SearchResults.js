import React from 'react';
import {useParams} from 'react-router'
import {getSearchMovies, getSearchSeries} from './requests';
import Row from './Row'
import Nav from './Nav'
import './Search.css'

const mainPosterURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const Results = () => {
   const {keyword} = useParams();
   let movies_url=getSearchMovies(keyword);
   let series_url=getSearchSeries(keyword);
   return(
           <>
           <Nav />
           <div className="main search_results">
            <div className="movieSection">
                <Row type="movie" title="Movie Results" fetchUrl={movies_url}></Row>
            </div>
            <div className="seriesSection">
                <Row type="series" title="Series Results" fetchUrl={series_url}/>
            </div>
           </div>
           </>
   )

}

export default Results;
