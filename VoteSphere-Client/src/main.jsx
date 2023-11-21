import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Stylesheets/Global.css';
import './Stylesheets/Responsive.css';

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div id='main'>
        <App />
      </div>
    </React.StrictMode>
  );
});
