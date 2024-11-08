import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';
import Remeras from './views/remeras';
import Cart from './views/cart';
import NavBar from './componentes/navbar';
import Footer from './componentes/footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>  // Cambio aquí de Switch a Routes
          <Route path="/" element={<Home />} />   // Cambio en la forma de definir las rutas
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/remeras" element={<Remeras />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

