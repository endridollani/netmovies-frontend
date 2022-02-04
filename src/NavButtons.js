import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function NavButtons({div}){

    function getButtons(){
        return <>
        <button id="navigation-button" type="button" onClick={() => document.getElementById(`${div}`).scrollLeft -= 1000}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="navigation-button" type="button" onClick={() => document.getElementById(`${div}`).scrollLeft += 1000}>
        <FontAwesomeIcon icon={faChevronRight} />
        </button> 
        </>;
    }

    ReactDOM.render(
        getButtons(), document.getElementsByClassName(`${div}-buttons`)[0]
    )


    return null;
    
}

export default NavButtons;