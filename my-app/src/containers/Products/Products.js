import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsButton from '../../components/ProductsButton/ProductsButton';
import { IoMdPerson, IoMdAdd } from 'react-icons/io';
import formIcon from '../../assets/FormIcon.png';
import './Products.css';
import Table from '../../components/Table/Table';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

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
        />
      </div>
      <h1>Products</h1>
      <div className='table-container'>
        <Table products={products} />
      </div>
    </div>
  );
};

export default Products;