import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store, reducer } from './redux';

const Store = createStore(reducer, store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App className="App" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
