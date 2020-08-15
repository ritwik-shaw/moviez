import './SearchBar.css';
import searchIcon from '../../images/search.svg';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../../store/movies/actions';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this._searchInput = null;
    }

    submit(e) {
        e.preventDefault();

        if (this._searchInput.value && this._searchInput.value.length) {
            this.props.searchMovie(this._searchInput.value);
        } else {
            this.props.resetMovieSearch();
        }
    }

    render() {
        return (
            <form  id="form">
                <img src={searchIcon} alt="search icon" className="searchIcon" />
                <input
                    id="searchInput"
                    className="searchBar"
                    type="text"
                    placeholder="Search a movie"
                    onKeyUp={this.submit}
                    ref={input => this._searchInput = input}
                    required />
            </form>
        );
    }
}

SearchBar.propTypes = {
    searchMovie: propTypes.func.isRequired,
    resetMovieSearch:  propTypes.func.isRequired
};


export default connect(null, {
    searchMovie: actions.searchMovie,
    resetMovieSearch: actions.resetMovieSearch
})(SearchBar);