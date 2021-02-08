import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddText from './text'
import './video.css'
import LeaveTheComment from './Comment'
import Search from './Search'
import Welcome from './video.js';
import { Router } from '@reach/router';
import RenderLove from './love'

// import RenderLove from './love'
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <App path='/' />
      <RenderLove path='/love' />

    </Router>

    <Search />
    <AddText />
    <LeaveTheComment />
    <Welcome />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
