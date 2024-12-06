import { useState, useEffect } from "react";
import "../products/ProductList.css";
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        setCart(products);
    }, []);
    
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('products', JSON.stringify(updatedCart));
    };

    const eliminarProducto = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        updateCart(updatedCart);
    };

    const restarUnaUnidad = (id) => {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }).filter(product => product.quantity > 0); 

        updateCart(updatedCart);
    };
    const sumarUnaUnidad = (id) => {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        }).filter(product => product.quantity > 0); 

        updateCart(updatedCart);
    };


    function RealizarCompra() {
        let cart = JSON.parse(localStorage.getItem('products'))
        let carrito = []
        
        cart.map(p => carrito.push({
            id: p.id,
            total: +(p.quantity) * +(p.price),
            name: p.nameProduct,
            quantity: p.quantity
        }))

        axios.post("/api/protected/buy", {
            cart: JSON.stringify(carrito)
        })
            .then((res) => res.data)
            .then((res) => {
                if (res.message) {
                    localStorage.setItem('products', JSON.stringify([]))
                    alert('Compra realizada')
                }
            })
    }

    return (<>
        {cart.map((product) => (
            <div className="item-properties" key={product.id}>
                <div className="cartContent" key={product.id}>
                    <img src={product.img} alt="product-card" />
                    <h3 className="name">{product.quantity} x {product.name}</h3>
                    <h4 className="price">{product.price * product.quantity}$</h4>
                    <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                    <button onClick={() => sumarUnaUnidad(product.id)}>Sumar uno</button>
                    <button onClick={() => restarUnaUnidad(product.id)}>Sacar uno</button>
                </div>
            </div>
        ))}
        <button onClick={() => RealizarCompra()}>Realizar compra</button>
    </>)
};

export default Cart;