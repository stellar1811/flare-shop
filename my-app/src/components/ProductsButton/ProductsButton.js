import './ProductsButton.css';

const ProductsButton = ({ label, onClick, className, Icon }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {Icon && <Icon className="button-icon" />}
      {label}
    </button>
  );
};

export default ProductsButton;