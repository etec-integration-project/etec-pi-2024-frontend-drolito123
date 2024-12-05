import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/shirts");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            <h2>Productos</h2>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.imageUrl || "https://via.placeholder.com/150"} 
                            alt={product.name} 
                            className="product-image"
                        />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <button className="add-to-cart-button">Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
