import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../App.jsx';
import { HeaderComponent } from '../Header/Header.jsx';
import { CardComponent } from '../Card/Card.jsx';
import '../../styles/index.css';
import './Main.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
