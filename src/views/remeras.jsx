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

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f4f4f4;
`;

const Product = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  background-color: white;
`;

const Button = styled.button`
  background-color: white;
  color: #287233;
  padding: 10px;
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

const Remeras = () => {
  const { dispatch } = useContext(CartContext);
  const products = [
    { id: 1, name: "Remera Lacoste", price: 50 },
    { id: 2, name: "Remera Tranca", price: 45 }
  ];

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <ProductsContainer>
      {products.map(product => (
        <Product key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Button onClick={() => handleAddToCart(product)}>Añadir al Carrito</Button>
        </Product>
      ))}
    </ProductsContainer>
  );
}

export default Remeras;
