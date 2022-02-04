import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function NavButtons({div}){

    return <>
        {(console.log(div))}
        <button id="navigation-button" type="button" onClick={() => document.getElementById(`${div}`).scrollLeft -= 1000}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="navigation-button" type="button" onClick={() => document.getElementById(`${div}`).scrollLeft += 1000}>
        <FontAwesomeIcon icon={faChevronRight} />
        </button> 
    </>;
}

export default NavButtons;