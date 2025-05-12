// productQuery.js
const { Product } = require('../models');

const getAllProduct = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Failed to fetch products: ' + error.message);
  }
};

const getProductByCategory = async (categoryId) => {
  try {
    const products = await Product.findAll({
      where: {
        category_id: categoryId
      }
    });
    return products;
  } catch (error) {
    throw new Error('Failed to fetch products by category: ' + error.message);
  }
};

const getProductById = async (productId) => {
  try {
    const products = await Product.findOne({
      where: {
        id: productId
      }
    });
    return products;
  } catch (error) {
    throw new Error('Failed to fetch products by id: ' + error.message);
  }
};

module.exports = {
  getAllProduct,
  getProductByCategory,
  getProductById
};
