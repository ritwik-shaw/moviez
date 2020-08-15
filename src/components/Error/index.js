import './error.css';

import propTypes from 'prop-types';

const Error = ({ callback }) =>
    <div className="errorContainer">
        <h1>Something bad happened.</h1>
        <button
            className="retry"
            onClick={ () => callback() }>
            Retry
        </button>
    </div>;


Error.propTypes = {
    callback: propTypes.func
};

export default Error;