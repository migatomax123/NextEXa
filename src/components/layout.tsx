// Navigation.tsx

import React, { ReactNode } from 'react';

interface NavigationProps {
  children?: ReactNode; // Hacer que children sea opcional
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <nav>
      {children}
      {/* Otro contenido de navegación aquí */}
    </nav>
  );
};

export default Navigation;

