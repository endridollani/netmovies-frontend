import React from 'react';
import Nav from './Nav'
import Grid from './ContentGrid'

const History = () => {
   return(
           <>
           <Nav />
           <div className="main">
            <div className="historySection">
                <h2>History</h2>
                <Grid type="history"></Grid>
            </div>
           </div>
           </>
   )

}

export default History;
