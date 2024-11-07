import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import setTheme from './utils/setTheme';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

setTheme('base');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
