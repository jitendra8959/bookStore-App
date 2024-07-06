import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './stores';

import App from './App.jsx'
import './sass/app.scss';
import './index.css'

import { LoaderProvider } from './context/LoaderContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
)
