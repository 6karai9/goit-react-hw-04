import React from 'react';
import ReactDOM from 'react-dom/client'; // Використовується ReactDOM.createRoot для React 18
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root')); // Створення кореня з контейнером
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
