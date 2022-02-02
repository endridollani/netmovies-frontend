import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import netmovies_logo from './netmovies_logo.png'
import user_avatar from './user_avatar.png'

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return( 
        <div className={`nav ${show && "nav_black"}`}>
            <Link to={`/`}>
                <img 
                    className='nav_logo'
                    src={netmovies_logo}
                    alt="Netmovies Logo"  
                />
            </Link>
            

            <img 
                className='nav_avatar'
                src={user_avatar}
                alt="User Avatar" 
            />
        </div>
    )
}

export default Nav;