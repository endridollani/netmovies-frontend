import React from 'react';
import Nav from './Nav'
import Grid from './ContentGrid'
import './Search.css'
import ChangeTitle from './ChangePageTitle'

const History = () => {
   return(
           <>
           <ChangeTitle pageTitle={`History - Netmovies`} />
           <Nav />
           <div className="main grid-results">
            <div className="historySection">
                <Grid type="history" title="History"></Grid>
            </div>
           </div>
           </>
   )

}

export default History;
