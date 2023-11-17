import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movie from './movie';
import Button from './components/button';
//import { ButtonClass } from './components/button';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>hello react</h1>
  <Button />
  
  <React.StrictMode>
    <App />
    <div id='movies'>
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie /></div>
  </React.StrictMode>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

