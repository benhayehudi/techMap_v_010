import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from './reducers/SearchReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(SearchReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
