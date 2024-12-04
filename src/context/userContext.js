import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para guardar el usuario logeado

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useUser = () => useContext(UserContext);
