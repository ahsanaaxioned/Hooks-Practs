import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassHooks from './components/ClassHooks';
import FunctionalHooks from './components/FunctionalHooks';
import './App.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassHooks />
    <FunctionalHooks />
  </React.StrictMode>
);

reportWebVitals();
