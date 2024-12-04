import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./logyres.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      setUser(response.data.username); // Guarda el usuario logeado
      navigate("/"); // Redirige al home
    } catch (err) {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta?{" "}
        <a href="/register" className="link">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
}

export default Login;
