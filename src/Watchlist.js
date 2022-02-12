import React from 'react';
import Nav from './Nav'
import Grid from './ContentGrid'

const Watchlist = () => {
   return(
           <>
           <Nav />
           <div className="main">
            <div className="watchlistSection">
                <h2>Watchlist</h2>
                <Grid type="watchlist"></Grid>
            </div>
           </div>
           </>
   )

}

export default Watchlist;
