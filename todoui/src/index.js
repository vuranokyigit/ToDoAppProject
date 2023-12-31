import React from 'react';
import ReactDOM from 'react-dom';
import RouterMain from './component/RouterMain';
import reportWebVitals from './reportWebVitals';
import './index.css';
const rootElement=document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <RouterMain />
  </React.StrictMode>,
  rootElement
);
reportWebVitals();
