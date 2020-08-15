import {combineReducers} from 'redux';

import { moviesReducer as movies }  from './movies/';

export default combineReducers({
    movies
});
