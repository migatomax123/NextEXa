// components/ProductList.tsx

import React from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';

interface Product {
  title: string;
  img: string;
  code: string;
  stock: number;
  pvp: string;
  provider: string;
  range: string;
}

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((product, index) => (
        <Card key={index} shadow="sm">
          <CardBody>
            <Image src={product.img} alt={product.title} width="100%" height="auto" />
            <p>{product.title}</p>
            <p>Código: {product.code}</p>
            <p>Stock: {product.stock}</p>
            <p>PVP: {product.pvp}</p>
            <p>Proveedor: {product.provider}</p>
            <p>Gama: {product.range}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
