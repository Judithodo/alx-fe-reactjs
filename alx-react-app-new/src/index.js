import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';  // <-- Change this line to include .jsx extension
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
