import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './containers/Login/Login';
import Preview from './containers/Preview/Preview';
import Products from './containers/Products/Products';
import PreviewElem from './containers/PreviewElem/PreviewElem';
import PrivateRoute from './privateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/preview" element={<Preview />} />
          <Route path="/products" element={<Products />} />
          <Route path="/preview/:productId" element={<PreviewElem />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;