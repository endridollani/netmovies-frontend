import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import {movieRequests, seriesRequests} from './requests'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='MovieSection'>
        <Row title="Latest Movies" fetchUrl={movieRequests.getLatestMovies}/>
        <Row title="Treding Movies" fetchUrl={movieRequests.getTrendingMovies}/>
        <Row title="Popular Movies" fetchUrl={movieRequests.getPopularMovies}/>
      </div>
      <div className='SeriesSection'>
        <Row title="Latest Series" fetchUrl={seriesRequests.getLatestSeries}/>
        <Row title="Treding Trending" fetchUrl={seriesRequests.getTrendingSeries}/>
        <Row title="Popular Series" fetchUrl={seriesRequests.getPopularSeries}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
