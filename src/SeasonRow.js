import React from 'react'
import {Link} from 'react-router-dom'
import './Row.css'
const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Row({id, title, seriesData}){
    return( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
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
                            <p style={{textAlign: 'center'}}>{season.name}</p>
                        </div>
                    </Link>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Row;