import './Movie.css';

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Movie as MovieModel } from '../../store/movies/models';

const Movie = ({ movie }) => {
    return (
        <Link to={'movie/' + movie.id} className="movieLink">
            <img
                src={movie.posterImage}
                onError={
                    (e) => e.target.src = movie.placeholderImage
                }
                alt="undefined poster"
                className="imgResponsive"
            />
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </Link>
    );
};

Movie.propTypes = {
    movie: propTypes.instanceOf(MovieModel)
};

export default Movie;