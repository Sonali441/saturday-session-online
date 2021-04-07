import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Newcomponent from './components/Newcomponent';
import ComponentTwo from './components/ComponentTwo';
import LoginStatus from './components/LoginStatus';
ReactDOM.render(
  <React.StrictMode>
   { /*<App />*/}
   {/*<Newcomponent/>*/}
   {/*<ComponentTwo/>*/}
   <LoginStatus/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
