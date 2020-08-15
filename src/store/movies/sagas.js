import { call, put, takeEvery } from 'redux-saga/effects';
import MovieService from './service';
import * as MovieActions from './actions';

function* fetchFeaturedMovies() {
   try {
      const movies = yield call(MovieService.getFeatured);
      yield put(new MovieActions.getFeaturedMoviesSuccess(movies));
   } catch (e) {
      yield put(new MovieActions.getFeaturedMoviesFailure(e));
   }
}

function* fetchSearchMovie(action) {
    try {
       const movies = yield call(MovieService.searchMovies, action.payload);
       yield put(new MovieActions.searchMovieSuccess(movies));
    } catch (e) {
       yield put(new MovieActions.searchMovieFailure(e));
    }
 }

 function* fetchMovieDetails(action) {
    try {
       const movie = yield call(MovieService.getMovieDetails, action.payload);
       yield put(new MovieActions.getMovieDetailsSuccess(movie));
    } catch (e) {
       yield put(new MovieActions.getMovieDetailsFailure(e));
    }
 }

// use them in parallel
export const moviesSagas = [
    takeEvery(MovieActions.types.GET_FEATURED_MOVIES, fetchFeaturedMovies),
    takeEvery(MovieActions.types.SEARCH_MOVIE, fetchSearchMovie),
    takeEvery(MovieActions.types.GET_MOVIE_DETAILS, fetchMovieDetails)   
];