import axios from 'axios';
import React from 'react'
import {getMovieDetails} from './requests';
import { getWatchlist , getHistory } from './requests';
import './ContentGrid.css'

const poster_baseURL = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

function Grid({type}){

    const [content, setContent] = useState([]);

    useEffect(()=>{ 
        const fetchData = async () =>{
            let requestURL;
            if (type == "history"){
                requestURL = getHistory();
            }else{
                requestURL = getWatchlist();
            }
            
            const request = await axios.get(requestURL);

            let contentData = [];
            request.map(element => {
                let url = getMovieDetails(element.id);
                const el = await axios.get(url)
                contentData.push(el.data.results || el.results);
            })
            setContent(contentData);
            
        }
        fetchData();
    }, [type]);


    function truncateTitle(str, n){
        return str?.length > n ? str.substring(0, n-1) + "..." : str;
    }

    return(
        <div className="grid">
            <div className="grid_posters">
                {content.map((el, i) => {
                    let image = 
                        <Link to={`/${(el.name ? "series" : "movie")}/${el.id}`} key={el.id+"-"+i}>
                            <div className="grid_poster">
                                    <div className="row_poster">
                                        <img
                                            key={i+"-"+el.id}
                                            className='row_poster_img' 
                                            src={`${poster_baseURL}${el.poster_path}`} 
                                            alt={el.title || el.name} 
                                        />
                                    </div>
                                <b><p>{truncateTitle(el.title || el.name, 10)}</p></b>
                            </div>
                        </Link>
                    return image;
                })}
            </div>
        </div>
    )
}

export default Grid;