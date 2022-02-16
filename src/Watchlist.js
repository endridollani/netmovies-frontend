import React from 'react';
import Nav from './Nav'
import Grid from './ContentGrid'
import './Search.css'
import ChangeTitle from './ChangePageTitle'

const Watchlist = () => {
   return(
           <>
           <ChangeTitle pageTitle={`Watchlist - Netmovies`} />
           <Nav />
           <div className="main grid-results">
            <div className="watchlistSection">
                <div className="movieSection">
                    <Grid type="watchlist" media="movie" title="Movies on Watchlist"></Grid>
                </div>
                <div className="movieSection">
                    <Grid type="watchlist" media="series" title="Series on Watchlist"></Grid>
                </div>
            </div>
           </div>
           </>
   )

}

export default Watchlist;
