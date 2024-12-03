import React from "react";
import Header from "./components/header/header.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/footer.jsx";
import ShirtList from "./components/products/ShirtList.jsx";  // Asegúrate de que ShirtList esté en la ruta correcta.
import Home from "./components/main/main.jsx";  // Asegúrate de que Home esté en la ruta correcta.

function App() {
  return (
    <div>
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
