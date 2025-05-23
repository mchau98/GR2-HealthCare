import axiosClient from './axiosClient';

export const getCartWithItems = async (userId) => {
  const response = await axiosClient.get(`/cart/${userId}`);
  return response.data;
};

export const addItemToCart = async (productId, quantity, userId) => {
  const response = await axiosClient.post(`/cart/${userId}/add`, {
    productId,
    quantity,
  });
  return response.data;
};

export const updateCartItem = async (productId, quantity, userId) => {
  const response = await axiosClient.put(`/cart/${userId}/update`, {
    productId,
    quantity,
  });
  return response.data;
};

export const removeCartItem = async (productId, userId) => {
  const response = await axiosClient.delete(`/cart/${userId}/remove/${productId}`, {
    data: { productId },
  });
  return response.data;
};
