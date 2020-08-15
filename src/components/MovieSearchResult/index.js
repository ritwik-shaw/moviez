import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Movie as MovieModel } from '../../store/movies/models';

const MovieSearchResult = ({ movie }) => {

    this.onClick = () => {
        
    };

    return (
        <Link to={'/movie/' + movie.id} onClick={this.onClick}>
            <img
                src={movie.posterImage}
                onError={
                    (e) => e.target.src = movie.placeholderImage
                }
                alt="undefined poster"
                className="resultPoster" />
            <div>
                <p>{movie.title}</p>
                <p>{movie.releaseDate}</p>
            </div>
        </Link>
    );

};

MovieSearchResult.propTypes = {
    movie: propTypes.instanceOf(MovieModel)
};

export default MovieSearchResult;