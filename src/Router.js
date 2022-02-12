import React from 'react'
import {Route, Routes} from 'react-router-dom'

import SearchResults from './SearchResults'
import MovieDetails from './MovieDetails'
import SeriesDetails from './SeriesDetails'
import Watchlist from './Watchlist'
import History from './History'
import Home from './Home'
import SeasonDetails from './SeasonDetails'
import Login from './auth_pages/Login'

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
                exact path='/series/:id/:season'
                element={<SeasonDetails />}
            />
            <Route 
                exact path='/watchlist/'
                element={<Watchlist />}
            />
            <Route 
                exact path='/history/'
                element={<History />}
            />
            <Route 
                exact path='/'
                element={<Home />}
            />
             <Route 
                exact path='/login/'
                element={<Login />}
            />
            
        </Routes>
    )
}

export default Router;