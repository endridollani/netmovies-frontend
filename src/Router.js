import React from 'react'
import {Route, Routes} from 'react-router-dom'

import SearchResults from './SearchResults'
import MovieDetails from './MovieDetails'
import SeriesDetails from './SeriesDetails'
import Watchlist from './Watchlist'
import History from './History'
import Home from './Home'

const Router = () => {
    return (
        <Routes>
            <Route 
                exact path='/search/:keyword'
                element={<SearchResults />}
            />
            <Route 
                
                exact path='/movie/:id'
                element={<MovieDetails />}
            />
            <Route 
                exact path='/series/:id'
                element={<SeriesDetails />}
            />
            <Route 
                exact path='/:type/watchlist/'
                element={<Watchlist />}
            />
            <Route 
                exact path='/:type/history/'
                element={<History />}
            />
            <Route 
                exact path='/'
                element={<Home />}
            />
            
        </Routes>
    )
}

export default Router;