import axiosGeneral from './axiosGeneral';

export const getProductById = async (id) => {
  const response = await axiosGeneral.get(`/product/${id}`);
  return response.data;
};

export const getProductByCategory = async (categoryId) => {
  const response = await axiosGeneral.get(`/product/category/${categoryId}`);
  return response.data;
};

export const getAllProducts = async () => {
  const response = await axiosGeneral.get('/product');
  return response.data;
};
