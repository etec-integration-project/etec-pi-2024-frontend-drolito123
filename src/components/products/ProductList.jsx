import React, { useState } from 'react';
import { useEffect} from 'react';
import axios from "axios";
import "./ProductList.css"


export default ProductList = ({ allProducts, setAllProducts }) => {
    const [data, setData] = useState([]);

    useEffect( () =>{

        const fetchdata = async () => {
            try {
                const respuesta = await axios.get("http://localhost:3001/api/shirts");
                setData(respuesta.data)
                
            } catch (error) {
                console.log("Error")
                
            }

        }
        fetchdata();
    }, [])



    function addToCart (product){


        const products = JSON.parse(localStorage.getItem('products'))
        const isInProducts = products.some(p => p.id === product.id);

        if (isInProducts) {
            products.forEach(p => {
                if (p.id === product.id) {
                    p.quantity++;
                }
            });
        } else {
            products.push({
                id: product.id,
                name: product.nameProduct,
                price: product.price,
                img: product.urlImage,
                quantity: 1
            })
        }

        localStorage.setItem('products', JSON.stringify(products))
    }

    
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
                            <button className="add-to-cart-button" onClick={() => addToCart (product)}>Añadir al carrito</button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};