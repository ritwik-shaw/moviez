import './NewMovies.css';

import propTypes from 'prop-types';

import Movie from '../../components/Movie';


const NewMovies = ({ movies }) => {

    return (
        <div>
            <section>
                <h2>New Releases</h2>
            </section>
            <div className="newMovies">
                {
                    movies && movies.length ?
                        movies.map((movie, i) => <Movie key={i} movie={movie} />) : 
                        null
                }
            </div>
        </div>
    );
};

NewMovies.propTypes = {
    movies: propTypes.array
};

export default NewMovies;