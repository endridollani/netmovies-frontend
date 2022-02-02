import React from 'react';
import './Home.css';
import Row from './Row'
import Nav from './Nav'
import Footer from './Footer'
import Banner from './Banner'
import {movieRequests, seriesRequests} from './requests'

function Home() {
  
  return (
    <div className='main'>
      <Nav />
      <Banner />
      <div className='MovieSection'>
        <Row type="movie" title="Latest Movies" fetchUrl={movieRequests.getLatestMovies}/>
        <Row type="movie" title="Trending Movies" fetchUrl={movieRequests.getTrendingMovies}/>
        <Row type="movie" title="Popular Movies" fetchUrl={movieRequests.getPopularMovies}/>
      </div>
      <div className='SeriesSection'>
        <Row type="series" title="Latest Series" fetchUrl={seriesRequests.getLatestSeries}/>
        <Row type="series" title="Trending Series" fetchUrl={seriesRequests.getTrendingSeries}/>
        <Row type="series" title="Popular Series" fetchUrl={seriesRequests.getPopularSeries}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;