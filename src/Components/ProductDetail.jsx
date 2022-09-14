import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import data from '../assets/productsData';

const ProductDetail = () => {
  const { name } = useParams();
  const thisProduct = data.find((prod) => prod.name === name);

  const navigate = useNavigate();

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>{thisProduct.id}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default ProductDetail;
