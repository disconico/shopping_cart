import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Context/CartContext';
import { FilterContextProvider } from './Context/FilterContext';
import ScrollToTop from './Components/Helpers/ScrollToTop';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <FilterContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <ScrollToTop />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </FilterContextProvider>
  </ContextProvider>
);
