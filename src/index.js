import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate = new Date(2020, 3, 5, 20);
curDate = curDate.getHours();

let greeting = '';

const cssStyle = {};

if(curDate >= 1 && curDate <12) {
  greeting = 'good Morning';
  cssStyle.color = 'green';
}
else if (curDate >= 12 && curDate < 16) {
  greeting = 'good evening';
  cssStyle.color = 'red';
}
else if(curDate >= 16 && curDate <19) {
  greeting = 'good Evening';
  cssStyle.color = 'orange';
}
else {
  greeting = 'good Night';
  cssStyle.color = 'blue';
}

ReactDOM.render(
  <>
  <div>
      <h1> Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,
  document.getElementById('root')  
);