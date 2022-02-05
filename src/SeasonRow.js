import React from 'react'
import {Link} from 'react-router-dom'
import './Row.css'
import NavButtons from './NavButtons'
const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Row({id, title, seriesData}){
    function truncateTitle(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }


    return( 
        <div className="row">
            <div className="title-buttons">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className={title+"-buttons"} id="buttons"></div>
            </div>
            <div className={title+"-buttons"} id="buttons"></div>
            <div className="row_posters" id={title}>
                {((seriesData.seasons).filter(season => season.season_number > 0 && season.poster_path != null)).map(season => {
                    let image = 
                    <Link to={`/series/${id}/${season.season_number}`} style={{color: '#FFF',textDecoration: 'none'}}>
                        <div className="row_poster">
                            <img
                                key={season.id}
                                className='row_poster_img' 
                                src={`${poster_baseURL}${season.poster_path}`} 
                                alt={season.name} 
                            />
                            <p style={{textAlign: 'center'}}>{truncateTitle(season.name, 15)}</p>
                        </div>
                    </Link>
                    return image;
                })}
            </div>
            {
            (document.getElementById(`${title}`)) ? 
                <>
                {
                    //If row has horizonstal scroll, then we need buttons to navigate the hidden seasons
                    document.getElementById(`${title}`).clientWidth < document.getElementById(`${title}`).scrollWidth ?
                    <NavButtons div={title} /> : ""
                }
                </>
                : ""
            }
        </div>
    )
}

export default Row;