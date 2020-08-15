import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

import rootSaga from './rootSagas';

// ------------------------------------------------------
// * Create middlewares for store
// ------------------------------------------------------

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state: ', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saga = createSagaMiddleware();

const storeFactory = (initialState = {}) => { 
    let store = applyMiddleware(logger, saga)(createStore)(
        rootReducer, initialState
    );

    saga.run(rootSaga);

    return store;
};
    
export default storeFactory;