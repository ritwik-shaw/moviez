import React, { Component } from 'react';
import propTypes from 'prop-types';

import sorry from '../../images/oops.png';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <img className="errorImage" src={sorry} alt="error" />
            );
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: propTypes.array
};

export default ErrorBoundary;