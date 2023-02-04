/**
 * Fonts used in project
 */
import '@fontsource/inter';
import '@fontsource/noto-sans-jp';
// global css
import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
