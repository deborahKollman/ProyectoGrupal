import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.routes';
import { BrowserRouter } from 'react-router-dom';
import STORE from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={STORE}>
    <BrowserRouter outer>
      <App />
    </BrowserRouter>
  </Provider>
); 

/* 

npm install react-redux
npm i react-router-dom
npm i redux-thunk
npm install --save redux-devtools-extension
npm install @reduxjs/toolkit

npm i axios


:: STYLES
npm install --save styled-components
npm install sass


:: ICONS


*/