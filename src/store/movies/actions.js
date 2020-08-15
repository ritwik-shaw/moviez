
export const types = {
    GET_FEATURED_MOVIES : 'GET_FEATURED_MOVIES',
    GET_FEATURED_MOVIES_SUCCESS : 'GET_FEATURED_MOVIES_SUCCESS',
    GET_FEATURED_MOVIES_FAILURE : 'GET_FEATURED_MOVIES_FAILURE',
    SEARCH_MOVIE: 'SEARCH_MOVIE',
    SEARCH_MOVIE_SUCCESS: 'SEARCH_MOVIE_SUCCESS',
    SEARCH_MOVIE_FAILURE: 'SEARCH_MOVIE_FAILURE',
    RESET_MOVIE_SEARCH: 'RESET_MOVIE_SEARCH',
    GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS',
    GET_MOVIE_DETAILS_SUCCESS: 'GET_MOVIE_DETAILS_SUCCESS',
    GET_MOVIE_DETAILS_FAILURE: 'GET_MOVIE_DETAILS_FAILURE'
};

export const getFeaturedMovies = () =>
({
    type: types.GET_FEATURED_MOVIES
});

export const getFeaturedMoviesSuccess = featuredMovies =>
({
    type: types.GET_FEATURED_MOVIES_SUCCESS,
    payload: featuredMovies
});

export const getFeaturedMoviesFailure = error =>
({
    type: types.GET_FEATURED_MOVIES_FAILURE,
    payload: error
});

export const searchMovie = (query) =>
({
    type: types.SEARCH_MOVIE,
    payload: query
});

export const searchMovieSuccess = moviesResult =>
({
    type: types.SEARCH_MOVIE_SUCCESS,
    payload: moviesResult
});

export const searchMovieFailure = error =>
({
    type: types.SEARCH_MOVIE_FAILURE,
    payload: error
});

export const resetMovieSearch = () =>
({
    type: types.RESET_MOVIE_SEARCH
});

export const getMovieDetails = (movieId) =>
({
    type: types.GET_MOVIE_DETAILS,
    payload: movieId
});

export const getMovieDetailsSuccess = (movie) =>
({
    type: types.GET_MOVIE_DETAILS_SUCCESS,
    payload: movie
});

export const getMovieDetailsFailure = (error) =>
({
    type: types.GET_MOVIE_DETAILS_FAILURE,
    payload: error
});