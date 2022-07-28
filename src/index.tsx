import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

