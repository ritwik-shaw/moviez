import { types } from './actions';

const initialState = {
    featured: [],
    searchResult: [],
    selectedMovie: null,
    error: null
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FEATURED_MOVIES_SUCCESS:

            return {
                ...state,
                featured: action.payload,
                error: null
            };

        case types.GET_FEATURED_MOVIES_FAILURE:

            return {
                ...state,
                featured: null,
                error: action.payload
            };

        case types.SEARCH_MOVIE_SUCCESS:

            return {
                ...state,
                searchResult: action.payload
            };

        case types.RESET_MOVIE_SEARCH:

            return {
                ...state,
                searchResult: [],
                error: null
            };

        case types.GET_MOVIE_DETAILS:
            return {
                ...state,
                selectedMovie: null
            };

        case types.GET_MOVIE_DETAILS_SUCCESS:

            return {
                ...state,
                selectedMovie: action.payload,
                error: null
            };

        case types.GET_MOVIE_DETAILS_FAILURE:

            return {
                ...state,
                selectedMovie: null,
                error: action.payload
            };

        default:
            return state;
    }
};

export default moviesReducer; 