export const baseUrl = "https://api.themoviedb.org/3";
export const backendUrl = "https://localhost:8080"
const api_key=process.env.REACT_APP_api_key;

export const movieRequests = {
    getLatestMovies: baseUrl+'/movie/now_playing?api_key='+api_key,
    getTrendingMovies: baseUrl+'/trending/movie/day?api_key='+api_key,
    getPopularMovies: baseUrl+'/movie/popular?api_key='+api_key,
    getMovieHistory: baseUrl+'/movie/history?api_key='+api_key,
    getMovieWatchlist: baseUrl+'/movie/watchlist?api_key='+api_key,
    getTopRatedMovies: baseUrl +'/movie/top_rated?api_key='+api_key,
}

export const getMovieDetails = (movie_id) => {
    return baseUrl+`/movie/${movie_id}?api_key=`+api_key;
}

export const getSimilarMovies = (movie_id) => {
    return baseUrl+`/movie/${movie_id}/similar?api_key=`+api_key;
}

export const getMovieCast = (movie_id) => {
    return baseUrl + `/movie/${movie_id}/credits?api_key=`+api_key;
}

export const seriesRequests = {
    getLatestSeries: baseUrl+'/tv/on_the_air?api_key='+api_key,
    getAiringToday: baseUrl+'/tv/airing_today?api_key='+api_key,
    getTrendingSeries: baseUrl+'/trending/tv/day?api_key='+api_key,
    getPopularSeries: baseUrl+'/tv/popular?api_key='+api_key,
    getTopRatedSeries: baseUrl +'/tv/top_rated?api_key='+api_key,
    getMovieHistory: baseUrl+'/tv/history?api_key='+api_key,
    getMovieWatchlist: baseUrl+'/tv/watchlist?api_key='+api_key,
    getMovieDetails: baseUrl+'/tv/details?api_key='+api_key,
    getSimilarSeries: baseUrl+'/tv/similar?api_key='+api_key,
}

export const getSeriesDetails = (series_id) => {
    return baseUrl+`/tv/${series_id}?api_key=`+api_key;
}

export const getSeasonDetails = (series_id, season_nr) => {
    return baseUrl+`/tv/${series_id}/season/${season_nr}?api_key=`+api_key;
}

export const getSimilarSeries = (series_id) => {
    return baseUrl+`/tv/${series_id}/similar?api_key=`+api_key;
}

export const getSeriesCast = (series_id) => {
    return baseUrl + `/tv/${series_id}/credits?api_key=`+api_key;
}

export const defaultRequests = {
    getTrending: baseUrl+'/trending/all/day?api_key='+api_key
}

export const getSearchMovies = (keyword)=> {
    return baseUrl + `/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
}

export const getSearchSeries = (keyword)=> {
    return baseUrl + `/search/tv?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
}

export const getSearchPerson = (keyword)=> {
    return baseUrl + `/search/person?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
}

export const getPersonDetails = (person_id)=> {
    return baseUrl+`/person/${person_id}?api_key=`+api_key;
}

export const getPersonMovieCredits = (person_id)=> {
    return baseUrl + `/person/${person_id}/movie_credits?api_key=`+api_key;
}

export const getPersonSeriesCredits = (person_id)=> {
    return baseUrl + `/person/${person_id}/tv_credits?api_key=`+api_key;
}
