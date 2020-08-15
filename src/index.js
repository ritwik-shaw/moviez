import './index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import storeFactory from './store';

import AppContainer from './containers/AppContainer';
import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';
import Header from './components/Header';

const store = storeFactory();

window.React = React;
window.store = store;

render(
    <Provider store={store}>
        <HashRouter basename="/">
            <AppContainer>
                <Header />

                <Route exact path="/" component={Home} />
                <Route path={'/movie/:id'} component={MovieDetails} />
            </AppContainer>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);