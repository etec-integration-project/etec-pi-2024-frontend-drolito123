import React from "react";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import ShirtList from "./components/products/ShirtList.jsx";
import Home from "./components/main/main.jsx";
import Login from "./components/auth/Login.jsx"; // Importar Login
import Register from "./components/auth/Register.jsx"; // Importar Register
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, useUser } from "./context/userContext.js"; // Importar UserProvider

function App() {
  return (
    <UserProvider> {/* Proveedor del contexto */}
      <BrowserRouter>
        <Routes>
          {/* Ruta Home */}
          <Route path="/" element={<>
            <Header />
            <Home />
            <Footer />
          </>} />

          {/* Ruta ShirtList */}
          <Route path="/shirtlist" element={<>
            <Header />
            <ShirtList />
            <Footer />
          </>} />

          {/* Ruta Login */}
          <Route path="/login" element={<>
            <Header />
            <WrappedLogin />
            <Footer />
          </>} />

          {/* Ruta Register */}
          <Route path="/register" element={<>
            <Header />
            <Register />
            <Footer />
          </>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

function WrappedLogin() {
  const { setUser } = useUser();
  return <Login setUser={setUser} />;
}

export default App;