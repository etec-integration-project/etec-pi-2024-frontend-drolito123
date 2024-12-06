import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>RHEIN</h4>
                    <p>Estilo y calidad inspirados en la elegancia.</p>
                </div>
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: info@rhein.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} RHEIN. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
