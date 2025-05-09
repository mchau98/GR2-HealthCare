'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const rawData = fs.readFileSync(
      path.resolve(__dirname, '../crawlData/product.json'),
      'utf-8'
    );
    const products = JSON.parse(rawData);

    const now = new Date();

    // Chuyển đổi dữ liệu từ file JSON thành định dạng phù hợp với model
    const seedData = products.map((product) => ({
      name: product.name || null,
      price: parseFloat(product.price) || null,
      salePrice: parseFloat(product.salePrice) || null,
      quantity: product.quantity || null,
      category_id: product.category_id || null,
      classification: product.classification || 'default',
      description: product.description || '',
      images: JSON.stringify(product.images) || '[]', // Lưu images dưới dạng JSON string
      createdAt: now,
      updatedAt: now,
    }));

    return queryInterface.bulkInsert('Products', seedData, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
