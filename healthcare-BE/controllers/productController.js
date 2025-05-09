// productController.js
const productQuery = require('../queries/productQuery');

const getAllProduct = async (req, res) => {
  try {
    const products = await productQuery.getAllProduct();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    if (!categoryId) {
      return res.status(400).json({ error: 'categoryId is required' });
    }
    const products = await productQuery.getProductByCategory(categoryId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProduct,
  getProductByCategory
};
