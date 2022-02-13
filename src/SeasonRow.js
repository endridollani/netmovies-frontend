import React from 'react'
import {Link} from 'react-router-dom'
import './Row.css'
const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Row({id, title, seriesData}){
    function truncateTitle(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }


    return( 
        <div className="grid">
            <div className="title-buttons">
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className={title+"-buttons"} id="buttons"></div>
            </div>
            <div className={title+"-buttons"} id="buttons"></div>
            <div className="grid_posters" id={title}>
                {((seriesData.seasons).filter(season => season.season_number > 0 && season.poster_path != null)).map(season => {
                    let image = 
                    <Link to={`/series/${id}/${season.season_number}`} style={{color: '#FFF',textDecoration: 'none'}}>
                        <div className="grid_poster">
                            <img
                                key={season.id}
                                className='grid_poster_img' 
                                src={`${poster_baseURL}${season.poster_path}`} 
                                alt={season.name} 
                            />
                            <p style={{textAlign: 'center'}}>{truncateTitle(season.name, 15)}</p>
                        </div>
                    </Link>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Row;