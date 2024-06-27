import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsButton from '../../components/ProductsButton/ProductsButton';
import { IoMdPerson, IoMdAdd } from 'react-icons/io';
import formIcon from '../../assets/FormIcon.png';
import './Products.css';
import Table from '../../components/Table/Table';
import {API_URL} from  '../../constants';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/v1/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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