import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getCartWithItems,
  addItemToCart,
  updateCartItem,
  removeCartItem,
} from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await getCartWithItems();
      setCart(data);
    } catch (error) {
      console.error('Lỗi khi lấy giỏ hàng:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity) => {
    await addItemToCart(productId, quantity);
    await fetchCart();
  };

  const updateItem = async (productId, quantity) => {
    await updateCartItem(productId, quantity);
    await fetchCart();
  };

  const removeItem = async (productId) => {
    await removeCartItem(productId);
    await fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateItem,
        removeItem,
        refetchCart: fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
