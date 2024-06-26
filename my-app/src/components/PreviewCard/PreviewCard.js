import './PreviewCard.css'; 
import { FaShoppingCart } from 'react-icons/fa'; 
import skirtImage from '../../assets/skirt.png'; 

const PreviewCard = ({ product }) => {
  return (
    <div className="preview-card">
      <img src={skirtImage} alt={product.name} className="product-image" style={{ width: '150px', height: '150px' }} />
      <h2 className="product-name">{product.name}</h2>
      <div className="product-details">
        <span className="product-price">${product.price}</span>
        <span className="product-quantity">Quantity: {product.quantity}</span>
      </div>
      <div className="product-footer">
        <FaShoppingCart className="cart-icon" />
        <span className="ready-to-ship">Ready to ship</span>
      </div>
    </div>
  );
};

export default PreviewCard;