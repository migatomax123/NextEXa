// components/Navigation.tsx

import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/productos">Productos</Link>
        </li>
        {/* Agrega más enlaces de navegación según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navigation;
