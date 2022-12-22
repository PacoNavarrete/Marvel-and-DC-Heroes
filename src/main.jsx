import React from 'react';
import reactDOM from 'react-dom/client';
import HeroesApp from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

const domContainer = document.getElementById('root');
const root = reactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
