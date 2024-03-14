// pages/registro.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegistroPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Registro exitoso, redirigir al usuario a otra página
        router.push('/login');
      } else {
        // Manejar errores de registro
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Nombre completo:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistroPage;
