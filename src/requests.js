const movieRequests = {
    getLatestMovies: '/api/v1/movies/latest',
    getTrendingMovies: '/api/v1/movies/trending',
    getPopularMovies: '/api/v1/movies/popular',
    getMovieHistory: '/api/v1/movies/history',
    getMovieWatchlist: '/api/v1/movies/watchlist',
    findMovies: '/api/v1/movies/find',
    getMovieDetails: '/api/v1/movies/details',
    getSimilarMovies: '/api/v1/movies/similar',
    
}

const seriesRequests = {
    getLatestSeries: '/api/v1/series/latest',
    getTrendingSeries: '/api/v1/series/trending',
    getPopularSeries: '/api/v1/series/popular',
    getMovieHistory: '/api/v1/series/history',
    getMovieWatchlist: '/api/v1/series/watchlist',
    findSeries: '/api/v1/series/find',
    getMovieDetails: '/api/v1/series/details',
    getSimilarSeries: '/api/v1/series/similar',
}

export default movieRequests;
export default seriesRequests;