import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { CartContext } from '../context/cartContext';  // Asegúrate de tener la ruta correcta al archivo del contexto

const pulse = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(164, 222, 2, 0.7);
  }
  to {
    box-shadow: 0 0 10px 10px rgba(164, 222, 2, 0);
  }
`;

const CartContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
`;

const Item = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: white;
  color: #287233;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: #a4de02;
    color: white;
  }
`;

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (id, price) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, price } });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContainer>
      {state.items.length > 0 ? state.items.map(item => (
        <Item key={item.id}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <span>Cantidad: {item.qty}</span>
          <Button onClick={() => handleRemoveFromCart(item.id, item.price)}>Quitar uno</Button>
        </Item>
      )) : <p>El carrito está vacío</p>}
      <div>Total: ${state.total}</div>
      <Button onClick={handleClearCart}>Vaciar Carrito</Button>
    </CartContainer>
  );
}

export default Cart;
