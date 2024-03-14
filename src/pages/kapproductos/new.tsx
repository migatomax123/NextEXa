// pages/admin/nuevo-producto.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NuevoProductoPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: '',
    code: '',
    stock: 0,
    pvp: '',
    provider: '',
    range: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Inserción exitosa, redirigir al usuario a otra página
        router.push('/admin/productos');
      } else {
        // Manejar errores de inserción
        console.error('Error en la inserción del producto');
      }
    } catch (error) {
      console.error('Error en la inserción del producto:', error);
    }
  };

  return (
    <div>
      <h1>Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Imagen (URL):</label>
          <input type="text" name="img" value={formData.img} onChange={handleChange} required />
        </div>
        <div>
          <label>Código:</label>
          <input type="text" name="code" value={formData.code} onChange={handleChange} required />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>
        <div>
          <label>PVP:</label>
          <input type="text" name="pvp" value={formData.pvp} onChange={handleChange} required />
        </div>
        <div>
          <label>Proveedor:</label>
          <input type="text" name="provider" value={formData.provider} onChange={handleChange} required />
        </div>
        <div>
          <label>Gama:</label>
          <input type="text" name="range" value={formData.range} onChange={handleChange} required />
        </div>
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default NuevoProductoPage;
