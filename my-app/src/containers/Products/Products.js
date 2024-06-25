import ProductsButton from '../../components/ProductsButton/ProductsButton';
import { IoMdPerson, IoMdAdd } from 'react-icons/io';
import formIcon from '../../assets/FormIcon.png';
import './Products.css';
import Table from '../../components/Table/Table';

const Products = () => {
    const products = [
        { category: 'Clothing', name: 'Skirt', quantity: 10, price: '$150' },
        { category: 'Clothing', name: 'Blouse', quantity: 5, price: '$50' },
        { category: 'Clothing', name: 'Dress', quantity: 3, price: '$75' },
    ];

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