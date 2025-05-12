import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import sotre from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={sotre}>
    <App />
  </Provider>
);
