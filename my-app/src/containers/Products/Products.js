import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsButton from '../../components/ProductsButton/ProductsButton';
import { IoMdPerson, IoMdAdd } from 'react-icons/io';
import formIcon from '../../assets/FormIcon.png';
import './Products.css';
import Table from '../../components/Table/Table';
import Form from './components/Form/Form';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/v1/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handlePreviewClick = () => {
    navigate('/preview');
  };

  const handleAddProductClick = () => {
    setFormTitle('Add Product');
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleEditProductClick = (product) => {
    setFormTitle('Edit Product');
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = async (product) => {
    try {
      await axios.delete(`${API_URL}/api/v1/products/${product.id}`);
      setProducts(products.filter(p => p.id !== product.id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };


  return (
    <div className="products">
      <div className='title'>
        <img src={formIcon} alt="Form Icon" className="form-icon" />
        <h2>Flare</h2>
      </div>
      <div className='products-buttons'>
        <ProductsButton
          label="Preview"
          className="preview-button"
          Icon={IoMdPerson}
          onClick={handlePreviewClick}
        />
        <ProductsButton
          label="Add Product"
          className="add-product-button"
          Icon={IoMdAdd}
          onClick={handleAddProductClick}
        />
      </div>
      <h1>Products</h1>
      <div className='table-container'>
        <Table products={products} onDelete={handleDeleteProduct} onEdit={handleEditProductClick} />
      </div>
      {showForm && (
        <Form
          title={formTitle}
          product={selectedProduct}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
};

export default Products;