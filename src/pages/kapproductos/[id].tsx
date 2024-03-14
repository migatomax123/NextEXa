// pages/productos/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const productDetails = {
    id: id as string,
    title: "Orange",
    description: "prueba15263.",
    img: "/images/fruit-1.jpeg",
    code: "001",
    stock: 10,
    pvp: "$5.50",
    provider: "Proveedor 1",
    range: "Alta"
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{productDetails.title}</h1>
      <img src={productDetails.img} alt={productDetails.title} className="w-full max-w-md mx-auto" />
      <p><strong>Código:</strong> {productDetails.code}</p>
      <p><strong>Stock:</strong> {productDetails.stock}</p>
      <p><strong>PVP:</strong> {productDetails.pvp}</p>
      <p><strong>Proveedor:</strong> {productDetails.provider}</p>
      <p><strong>Gama:</strong> {productDetails.range}</p>
      <p><strong>Descripción:</strong> {productDetails.description}</p>
    </div>
  );
};

export default ProductDetailPage;
