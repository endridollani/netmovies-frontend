import React from 'react';
import Nav from './Nav'
import Grid from './ContentGrid'
import './Search.css'
import ChangeTitle from './ChangePageTitle'

const History = () => {
   return(
           <>
           <ChangeTitle pageTitle={`Watchlist - Netmovies`} />
           <Nav />
           <div className="main grid-results">
            <div className="watchlistSection">
                <div className="movieSection">
                    <Grid type="history" media="movie" title="Movies you Watched"></Grid>
                </div>
                <div className="movieSection">
                    <Grid type="history" media="series" title="Series you Watched"></Grid>
                </div>
            </div>
           </div>
           </>
   )

}

export default History;
