import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import NewMovies from '../NewMovies';
import SearchResults from '../SearchResults';
import Error from '../../components/Error';
import * as actions from '../../store/movies/actions';

class Home extends Component {

  constructor(props) {
    super(props);
    props.getFeaturedMovies();

    this.onRetry = this.onRetry.bind(this);
  }

  renderMovies() {
    const hasSearchResults = this.props.searchResult.length;
    const isError = this.props.error;

    if (hasSearchResults) {
      return <SearchResults searchResult={this.props.searchResult} />;
    }

    if (isError) {
      return <Error callback={this.onRetry} />;
    }

    return <NewMovies movies={this.props.newMovies} />;
  }

  onRetry() {
    this.props.getFeaturedMovies();
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.renderMovies()}
      </div>
    );
  }
}

Home.propTypes = {
  getFeaturedMovies: propTypes.func.isRequired,
  newMovies: propTypes.array,
  searchResult: propTypes.array,
  error: propTypes.object
};

const mapStateToProps = (state) => {
  return {
    newMovies: state.movies.featured,
    searchResult: state.movies.searchResult,
    error: state.movies.error
  };
};

export default connect(mapStateToProps, {
  getFeaturedMovies: actions.getFeaturedMovies
})(Home);
