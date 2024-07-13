import { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';
import { API_URL } from '../../../../constants';

const Form = ({ title, product, onCancel, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    quantity: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        category: product.category,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        description: product.description,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.name || !formData.quantity || !formData.price || !formData.description) {
      return; 
    }

    try {
      const formattedFormData = {
        ...formData,
        price: `$${formData.price}`,
      };
      if (product) {
        await axios.put(`${API_URL}/api/v1/products/${product.id}`, formattedFormData);
      } else {
        await axios.post(`${API_URL}/api/v1/products`, formattedFormData);
      }
      onFormSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="form-modal" onSubmit={handleSubmit}>
      <div className="form-content">
        <h2>{title}</h2>
        <label>
          Категорія
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </label>
        <label>
          Назва
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Кількість
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
        </label>
        <label>
          Ціна
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Опис
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </label>
        <div className="form-buttons">
          <button type="button" onClick={onCancel}>Скасувати</button>
          <button type="submit">Надіслати</button>
        </div>
      </div>
    </form>
  );
};

export default Form;