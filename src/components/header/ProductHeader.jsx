import React from "react";
import { Link } from "react-router-dom";
import "./productHeader.css";

export default function ProductHeader() {
    return (
        <header className="product-header">
            <div className="logo-title">
                <Link to="/" className="title">
                    <h1>RHEIN - Productos</h1>
                </Link>
            </div>

            <nav className="product-header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="cart">
                            <i className="fas fa-shopping-cart"></i> Carrito
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
