import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext.js"; // Importar el contexto
import "./header.css";
import logo from "../../multimedia/RHEIN.png";

export default function Header() {
    const { user, logout } = useUser(); // Obtener el usuario del contexto

    return (
        <header className="header">
            <div className="logo-title">
                <Link to="/" className="title">
                    <img className="logo" src={logo} alt="logo-rhein" />
                    <h1>RHEIN</h1>
                </Link>
            </div>

            <nav className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shirtlist">Productos</Link>
                    </li>
                    {user ? ( // Si el usuario está logeado
                        <>
                            <li className="user-greeting">
                                Hola, {user.username}
                            </li>
                            <li>
                                <button 
                                    onClick={logout} 
                                    className="logout-button"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : ( // Si no está logeado
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                    <li>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
