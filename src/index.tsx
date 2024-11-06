import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setTheme from './utils/setTheme';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

setTheme('base');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
