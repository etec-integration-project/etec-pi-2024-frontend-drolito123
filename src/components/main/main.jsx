import React, { useEffect, useState } from "react";
import "./main.css";

export default function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/shirts");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className="main">
            {/* Hero Section */}
            <section className="hero">
                <h1>Descubre la Elegancia de RHEIN</h1>
                <p>Ropa diseñada para destacar en cualquier ocasión.</p>
                <button className="cta-button">Explorar Productos</button>
            </section>

            {/* Product Slider */}
            <section className="product-slider">
                <h2>Productos Destacados</h2>
                <div className="slider">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">{product.price} €</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
