import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Verificar si el item ya existe
      const exist = state.items.find(item => item.id === action.payload.id);
      if (exist) {
        // Aumentar la cantidad
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
          total: state.total + action.payload.price
        };
      } else {
        // Agregar el nuevo item
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
          total: state.total + action.payload.price
        };
      }
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      if (itemToRemove.qty === 1) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          total: state.total - action.payload.price
        };
      } else {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
          ),
          total: state.total - action.payload.price
        };
      }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
