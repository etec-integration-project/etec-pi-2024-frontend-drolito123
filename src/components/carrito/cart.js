import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css'; 

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Obtener el carrito al cargar la página
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  };

  const addToCart = async (id) => {
    try {
      const product = cart.find((item) => item.id === id);
      await axios.put(`http://localhost:3001/api/cart/update/${id}`, {
        quantity: product.quantity + 1,
      });
      fetchCart(); // Actualiza el carrito
    } catch (error) {
      console.error('Error al aumentar cantidad:', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const product = cart.find((item) => item.id === id);
      if (product.quantity > 1) {
        await axios.put(`http://localhost:3001/api/cart/update/${id}`, {
          quantity: product.quantity - 1,
        });
      } else {
        await axios.put(`http://localhost:3001/api/cart/update/${id}`, {
          quantity: 0,
        });
      }
      fetchCart();
    } catch (error) {
      console.error('Error al disminuir cantidad:', error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('http://localhost:3001/api/cart/clear');
      fetchCart();
    } catch (error) {
      console.error('Error al vaciar el carrito:', error);
    }
  };

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart?.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
              <div className="cart-actions">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart?.length > 0 && (
        <div className="cart-buttons">
          <button onClick={clearCart} className="clear-cart">
            Vaciar Carrito 🗑️
          </button>
          <button className="checkout-button">Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
