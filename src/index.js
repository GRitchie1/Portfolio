import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/Nav/Nav';

import reportWebVitals from './reportWebVitals';

//Sections
import Main from './sections/Main/Main';
import About from './sections/About/About';
import Qualifications from './sections/Qualifications/Qualifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Main />
    <About /> 
    <Qualifications /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
