/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//with react we build our own custom html components 
/*
const para = doucment.createElement('p');//here we are creating a elemnt named p
para.textContent = "this is also visible";//this is the content in the p elemnt 
document.querySelector('root').append(para);//them we are graccing doubment and inserting the para elemnt in the root elment 
//this is the imperative approach as you are giving straight by straight instructions on what to do not what we do in react 
*/
