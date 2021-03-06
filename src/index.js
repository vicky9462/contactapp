import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Store from './Store'


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={Store}>
    <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
