import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router'
import './Stylesheets/Global.css';
import './Stylesheets/Responsive.css';

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
