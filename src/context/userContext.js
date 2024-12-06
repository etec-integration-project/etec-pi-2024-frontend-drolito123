import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';

// Crear el contexto
const UserContext = createContext();

function getCookie(name) {
  const cookies = document.cookie.split('; ')
  for (let cookie of cookies) {
      const [key, value] = cookie.split('=')
      if (key === name) {
          return decodeURIComponent(value)
      }
  }
  return null
}

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para guardar el usuario logeado

  useEffect(() => {
    setUser(getCookie('username'));
  }, []);

  async function logout() {
    const response = await axios.post('/api/logout', {});
    alert(response.data.message);
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto en cualquier componente
export const useUser = () => useContext(UserContext);
