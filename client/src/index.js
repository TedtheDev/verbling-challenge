import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './views/App';

import reducers from './reducers';
import { FETCH_LIST_ITEMS } from './actions/types';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducers);

// Fetch listItems off of localStorage for the 'database'
const listItems = JSON.parse(localStorage.getItem('listItems'));

// if listItems saved in local storage
// dispatch FETCH_LIST_ITEMS to set listItems from storage
if(listItems) {
    store.dispatch({ type: FETCH_LIST_ITEMS, payload: listItems})
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);
