// productosdetails.tsx

import React from 'react';

interface ProductDetailsProps {
  product: {
    name: string;
    description: string;
    price: number;
    imageURL: string;
    // otros detalles del producto según sea necesario
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <img src={product.imageURL} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
};

export default ProductDetails;
