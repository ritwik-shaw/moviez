import propTypes from 'prop-types';

import MovieSearchResult from '../../components/MovieSearchResult';

import './SearchResults.css';

const SearchResults = ({ searchResult }) => {

    return (
        <form>
            <ul id="results" className="formResults">
                {
                    searchResult && searchResult.length ? (searchResult.map((movie, key) =>
                        <li key={key}>
                            <MovieSearchResult movie={movie} />
                        </li>)) : null
                }
            </ul>
        </form>
    );
};

SearchResults.propTypes = {
    searchResult: propTypes.array
};

export default SearchResults;

