import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Agrega estado de carga
    const [error, setError] = useState(null);    // Agrega estado para errores

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/shirts");
                setProducts(response.data);
                console.log("Productos obtenidos:", response.data); // Depuración
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setError("No se pudieron obtener los productos. Verifica el backend.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Cargando productos...</p>; // Muestra mensaje de carga
    if (error) return <p>{error}</p>; // Muestra mensaje de error

    return (
        <div className="product-list">
            <h2>Productos</h2>
            <div className="products-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img 
                                src={product.imageUrl || "https://via.placeholder.com/150"} 
                                alt={product.name} 
                                className="product-image"
                            />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price ? Number(product.price).toFixed(2) : "N/A"}</p>
                            <button className="add-to-cart-button">Añadir al carrito</button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
}
