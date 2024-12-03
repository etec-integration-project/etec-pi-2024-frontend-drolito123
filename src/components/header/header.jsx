import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../multimedia/RHEIN.png";

export default function Header() {
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
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
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
