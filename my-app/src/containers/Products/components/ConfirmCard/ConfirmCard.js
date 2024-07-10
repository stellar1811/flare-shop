import React from 'react';
import ConfirmButton from '../../../../components/ConfirmButton/ConfirmButton';
import './ConfirmCard.css';

const ConfirmCard = ({ message, onCancel, onConfirm }) => (
  <div className="confirm-overlay">
    <div className="confirm-card">
      <p>{message}</p>
      <ConfirmButton label="Cancel" onClick={onCancel} type="cancel" />
      <ConfirmButton className="delete" label="Delete" onClick={onConfirm} type="delete" />
    </div>
  </div>
);

export default ConfirmCard;