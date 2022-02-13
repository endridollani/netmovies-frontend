import React, {useEffect} from 'react'
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

    const checkStorage = key => {
        const storedData = localStorage.getItem(key);
        if (!storedData){
          if(window.location.pathname !== '/login'){
            window.location = '/login'
          }
        }
     }
    
     useEffect(() => {
      // when app loaded
      checkStorage('USER_KEY')
     }, []);
    


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
                element={`${checkStorage('USER_KEY') ? <Home /> : <Login />}`}
            />
            <Route 
                exact path='/login'
                element={<Login />}
            />
        </Routes>
    )
}

export default Router;