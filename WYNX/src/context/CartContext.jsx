import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'wynx-cart';

const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // Silently fail
  }
};

const cartReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      
      if (existingIndex >= 0) {
        newState = state.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      } else {
        newState = [...state, { 
          ...action.payload, 
          quantity: action.payload.quantity || 1,
          cartItemId: `${action.payload.id}-${action.payload.size}-${Date.now()}`
        }];
      }
      break;
    }
    
    case 'REMOVE_FROM_CART':
      newState = state.filter(item => item.cartItemId !== action.payload);
      break;
    
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        newState = state.filter(item => item.cartItemId !== action.payload.cartItemId);
      } else {
        newState = state.map(item =>
          item.cartItemId === action.payload.cartItemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;
    
    case 'CLEAR_CART':
      newState = [];
      break;
    
    default:
      return state;
  }
  
  saveCartToStorage(newState);
  return newState;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => loadCartFromStorage());

  const addToCart = (product, size, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        token: product.token,
        name: product.name,
        price: product.price,
        img: product.img,
        size,
        quantity,
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartItemId });
  };

  const updateQuantity = (cartItemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartItemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
