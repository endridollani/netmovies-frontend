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
                <Grid type="watchlist" title="Watchlist"></Grid>
            </div>
           </div>
           </>
   )

}

export default Watchlist;
