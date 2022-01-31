import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row'
import Nav from './Nav'
import Footer from './Footer'
import Banner from './Banner'
import {movieRequests, seriesRequests} from './requests'

function App() {
  
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <div className='MovieSection'>
        <Row title="Latest Movies" fetchUrl={movieRequests.getLatestMovies}/>
        <Row title="Trending Movies" fetchUrl={movieRequests.getTrendingMovies}/>
        <Row title="Popular Movies" fetchUrl={movieRequests.getPopularMovies}/>
      </div>
      <div className='SeriesSection'>
        <Row title="Latest Series" fetchUrl={seriesRequests.getLatestSeries}/>
        <Row title="Trending Series" fetchUrl={seriesRequests.getTrendingSeries}/>
        <Row title="Popular Series" fetchUrl={seriesRequests.getPopularSeries}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
