import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className="bg-dark text-center text-lg-start">
    <div className="text-center text-light p-3">
    For Software Engineer Intern Assignment - StrategyCo.Global by
    <a className="text-light " href="https://rakshitshetty.netlify.app"> {" "}Rakxit-Shetty</a>
  </div>
  
</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
