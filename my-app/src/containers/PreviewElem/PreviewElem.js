import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import './PreviewElem.css';

const PreviewElem = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };



  if (!product) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    window.history.back(); 
  };

  return (
    <div className='PreviewElem-container'>
      <h2 className='arrow' onClick={handleGoBack}>←</h2>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p className='desc'>Description: {product.description}</p>
    </div>
  );
};

export default PreviewElem;