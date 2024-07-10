import React, { useState } from 'react';
import './Table.css';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import ConfirmCard from '../../containers/Products/components/ConfirmCard/ConfirmCard'; 

const Table = ({ products, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setSelectedProduct(null);
  };

  const handleConfirm = () => {
    onDelete(selectedProduct);
    setShowConfirm(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <table className="product-table">
        <thead>
          <tr className='table-line'>
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td className="actions">
                <IoMdCreate className="icon edit-icon" />
                <IoMdTrash className="icon delete-icon" onClick={() => handleDeleteClick(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirm && (
        <ConfirmCard
          message="Are you sure you wanna delete this product?"
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default Table;
