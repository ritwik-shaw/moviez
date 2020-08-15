import { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import * as actions from '../../store/movies/actions';

import ErrorBoundary from '../ErrorBoundary';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.props.history.listen(() => {
            this.props.resetMovieSearch();
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="container">
                    {this.props.children}
                </div>
            </ErrorBoundary>
        );
    }
}

AppContainer.propTypes = {
    history: propTypes.object,
    children: propTypes.array,
    resetMovieSearch: propTypes.func
};

export default withRouter(connect(null, {
    resetMovieSearch: actions.resetMovieSearch
})(AppContainer));