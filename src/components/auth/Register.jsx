import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./logyres.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        username,
        email,
        password,
      });
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000); // Redirige al login después de 2 segundos
    } catch (err) {
      console.error("Error al registrarse", err);
    }
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
      {success && <p className="success">Registro exitoso. Redirigiendo...</p>}
    </div>
  );
}

export default Register;
