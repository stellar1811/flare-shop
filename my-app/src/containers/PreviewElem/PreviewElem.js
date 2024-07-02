import React from 'react';
import { useParams } from 'react-router-dom';

const PreviewElem = () => {
  const { productId } = useParams();

  return (
    <div>
      <span>Chosen product is: {productId}</span>
    </div>
  );
};

export default PreviewElem;