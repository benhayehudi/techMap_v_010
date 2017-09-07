import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from './reducers/SearchReducer';
import LikeReducer from './reducers/LikeReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
  SearchReducer,
  LikeReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
