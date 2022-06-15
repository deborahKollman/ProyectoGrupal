import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.routes';
import { DarkModeContextProvider } from './context/darkModeReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);

/* 

npm i react-circular-progressbar --force
npm install react-bootstrap bootstrap
npm install recharts --force
$ npm i @mui/x-data-grid --force

*/