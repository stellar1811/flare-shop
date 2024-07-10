import React from 'react';
import './ConfirmButton.css'; 

const ConfirmButton = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`confirm-button ${className}`}>
      {label}
    </button>
  );
};

export default ConfirmButton;