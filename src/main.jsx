import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Removing React.strictMode prevent double data import in console
  // <React.StrictMode> 
    <App />
  // </React.StrictMode>
);
