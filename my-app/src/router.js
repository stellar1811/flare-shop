import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './containers/Login/Login';
import TodoList from './containers/ToDoList/ToDoList';
import Preview from './containers/Preview/Preview';
import Products from './containers/Products/Products';
import PreviewElem from './containers/PreviewElem/PreviewElem';

const AppRouter = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/products" /> : <Login />} />
        <Route path="/todolist" element={token ? <TodoList /> : <Navigate to="/" />} />
        <Route path="/preview" element={token ? <Preview /> : <Navigate to="/" />} />
        <Route path="/products" element={token ? <Products /> : <Navigate to="/" />} />
        <Route path="/preview/:productId" element={token ? <PreviewElem /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;