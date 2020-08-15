import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { Movie as MovieModel } from '../../store/movies/models';
import MovieCast from '../../components/MovieCast';
import Error from '../../components/Error';

import * as actions from '../../store/movies/actions';

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.getMovieDetails = this.getMovieDetails.bind(this);
        this.onRetry = this.onRetry.bind(this);
        this.getMovieDetails();
    }

    getMovieDetails() {
        let movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }

    onRetry() {
        this.getMovieDetails();
    }

    render() {
        let { movieDetail } = this.props;
        const isError = this.props.error;

        if (!movieDetail) {
            return isError ? <Error callback={this.onRetry} /> : null;
        }

        return (
            <div>
                <div className="moviePage">
                    <div className="poster">
                        <img
                            src={movieDetail.posterImage}
                            onError={
                                (e) => e.target.src = movieDetail.placeholderImage
                            }
                            alt="undefined poster"
                            className="posterImg" />
                    </div>
                    <section className="movieDetails">
                        <h2 className="sectionTitle">{movieDetail.title}</h2>
                        <ul className="detailsList">
                            <li><span className="bold">Release date:</span> {movieDetail.releaseDate} </li>
                            <li><span className="bold">Rating: </span> {movieDetail.voteAverage} </li>
                            <li><span className="bold">Vote count: </span> {movieDetail.voteCount} </li>
                            <li><span className="bold">Genres: </span>{movieDetail.genre}</li>
                        </ul>
                        <p>{movieDetail.overview}</p>
                    </section>
                </div>
                <MovieCast cast={movieDetail.cast} />
            </div>
        );
    }
}

MovieDetails.propTypes = {
    movieDetail: propTypes.instanceOf(MovieModel),
    getMovieDetails: propTypes.func.isRequired,
    error: propTypes.object,
    match: propTypes.shape({
        params: propTypes.shape({
            id: propTypes.string,
        })
    })
};

const mapStateToProps = (state) => {
    return {
        movieDetail: state.movies.selectedMovie,
        error: state.movies.error
    };
};

export default connect(mapStateToProps, {
    getMovieDetails: actions.getMovieDetails
})(MovieDetails);