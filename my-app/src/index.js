import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Preview from './containers/Preview/Preview';
// import Login from './containers/Login/Login';
// import Products from './containers/Products/Products';
import AppRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
