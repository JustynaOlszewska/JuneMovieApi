import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import promiseMiddleware from 'redux-promise';
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


// const store = createStore(rootReducers, defaultState, applyMiddleware(promiseMiddleware))


ReactDOM.render(<Provider store = { storeWithMiddleware(rootReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ) }><App /></Provider>, document.getElementById('root'));