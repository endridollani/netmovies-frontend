import React from 'react'
import './EpisodeGrid.css'

function Grid({id, seasonNr, seasonData}){
    const playLink = `https://fsapi.xyz/tv-tmdb/${id}-${seasonNr}`
    const poster_baseURL = 'https://www.themoviedb.org/t/p/w227_and_h127_bestv2'

    function truncateTitle(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return(
        <div className="grid">
            {(seasonData.name ? <h4>{seasonData.name}</h4> : "")}
            <div className="grid_posters">
                {((seasonData.episodes).filter(e => e.still_path != null)).map(episode => {
                    let image = 
                        <div className="grid_poster" title={`S${seasonNr}E${episode.episode_number} - ${episode.name}`}>
                             <a href={playLink+"-"+episode.episode_number} target="_blank" rel="noopener noreferrer" className='text-reset text-decoration-none'>
                                <img
                                    key={episode.id}
                                    className='grid_poster_img' 
                                    src={`${poster_baseURL}${episode.still_path}`} 
                                    alt={episode.name} 
                                />
                                <b>
                                    <p>
                                        {truncateTitle(`S${seasonNr}E${episode.episode_number} - ${episode.name}`, 26)}
                                    </p>
                                </b>
                             </a>
                        </div>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Grid;