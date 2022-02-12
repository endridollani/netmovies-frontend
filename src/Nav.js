import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Nav.css'
import netmovies_logo from './netmovies_logo.png'
import user_avatar from './user_avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Nav(){
    const [show, handleShow] = useState(false);
    const [showdropdown, handleShowdropdown] = useState(false)
    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const {generalSearch} = event.target.elements;
        navigate(`/search/${generalSearch.value}`)
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                handleShow(true);
            }else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return( 
        <div className={`nav ${show && "nav_black"}`}>
            <div className="main-img">
                <Link to={`/`}>
                    <img 
                        className='nav_logo'
                        src={netmovies_logo}
                        alt="Netmovies Logo"  
                    />
                </Link>
            </div>
            
            <div className="search-profile">
                <div className="search-box">
                    <form onSubmit={handleSubmit}>
                        <div className="wrap">
                            <div className="search">
                                <input type="text" className="searchTerm" placeholder="Search anything..." id="generalSearch" />
                                <button type="submit" className="searchButton">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="profile-img" 
                        onMouseEnter={() => { handleShowdropdown(true)}}
                        onMouseLeave={() => { handleShowdropdown(false)}}>
                    <div className="img">
                        <img 
                            className='nav_avatar'
                            src={user_avatar}
                            alt="User Avatar" 
                        />
                    </div>
                    {showdropdown && (
                        <div className="dropdown">
                            <Link to={`/watchlist`}>
                                <p>My Watchlist</p>
                            </Link>
                            <Link to={`/history`}>
                                <p>My History</p>
                            </Link>
                            <Link to={`/login`}>
                                <p>Sign Out</p>
                            </Link>
                        </div>
                    )}
                </div>
                
            </div>
            
        </div>
    )
}

export default Nav;