import React from 'react';

import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import RouterMain from './component/RouterMain';

// CSS
import './index.css';

// 18n (dil)
import './internationalization/i18nlanguage'

// DOM ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));

// RENDER
root.render(
  <React.StrictMode>
    <React.Fragment>
      <RouterMain />
    </React.Fragment>
  </React.StrictMode>
);

reportWebVitals();
