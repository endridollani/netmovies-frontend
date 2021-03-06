import React from 'react';
import './Home.css';
import Row from './Row'
import Nav from './Nav'
import Footer from './Footer'
import Banner from './Banner'
import {movieRequests, seriesRequests} from './requests'
import ChangeTitle from './ChangePageTitle'

function Home() {
  
  return (
    <>
    <ChangeTitle pageTitle={`Dashboard - Netmovies`} />
    <div className='main'>
      <Nav />
      <Banner />
      <div className='watchlistSection'>
        <Row type="movie-watchlist" title="Movies In Your Watchlist" fetchUrl=""/>
        <Row type="series-watchlist" title="Series In Your Watchlist" fetchUrl=""/>
      </div>
      <div className='MovieSection'>
        <Row type="movie" title="Latest Movies" fetchUrl={movieRequests.getLatestMovies}/>
        <Row type="movie" title="Trending Movies" fetchUrl={movieRequests.getTrendingMovies}/>
        <Row type="movie" title="Popular Movies" fetchUrl={movieRequests.getPopularMovies}/>
        <Row type="movie" title="Top Rated Movies" fetchUrl={movieRequests.getTopRatedMovies}/>
      </div>
      <div className='SeriesSection'>
        <Row type="series" title="Series Airing Today" fetchUrl={seriesRequests.getAiringToday}/>
        <Row type="series" title="Latest Series" fetchUrl={seriesRequests.getLatestSeries}/>
        <Row type="series" title="Trending Series" fetchUrl={seriesRequests.getTrendingSeries}/>
        <Row type="series" title="Popular Series" fetchUrl={seriesRequests.getPopularSeries}/>
        <Row type="series" title="Top Rated Series" fetchUrl={seriesRequests.getTopRatedSeries}/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Home;