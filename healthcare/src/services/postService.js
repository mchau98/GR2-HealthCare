import axiosGeneral from './axiosGeneral';

export const getAllPosts = async () => {
  const response = await axiosGeneral.get('/posts/getPosts');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axiosGeneral.get(`/posts/getPost/${id}`);
  return response.data;
};

export const getPostsByCategory = async (category) => {
  const response = await axiosGeneral.get(`/posts/getPosts`, {
    params: { category },
  });
  return response.data;
};
