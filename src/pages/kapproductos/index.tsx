// pages/productos/index.tsx

import React from 'react';
import ProductList from '../../components/card';

const ProductosPage: React.FC = () => {
  const products = [
    {
      title: "prueba",
      img: "/images/fruit-1.jpeg",
      code: "001",
      stock: 10,
      pvp: "$5.50",
      provider: "Proveedor 1",
      range: "Alta"
    },
    {
      title: "prueba",
      img: "/images/fruit-2.jpeg",
      code: "002",
      stock: 5,
      pvp: "$3.00",
      provider: "Proveedor 2",
      range: "Media"
    },
    // Agregar más productos según sea necesario
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductosPage;
