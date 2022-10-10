import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Name="Karan Kanojia";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>
      {`Hello, my name is ${Name}`}
    </h1>
    <p>Current date is = {currDate} </p>
    <p>Current time is = {currTime} </p>
  </>,
  document.getElementById("root")
);