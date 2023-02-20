import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassHooks from './components/ClassHooks';
import FunctionalHooks from './components/FunctionalHooks';
import Event from './components/Event';
import './App.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassHooks />
    <FunctionalHooks />
    <Event />
  </React.StrictMode>
);

reportWebVitals();
