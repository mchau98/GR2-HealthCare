'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Products', {
      fields: ['category_id'], // cột đã tồn tại
      type: 'foreign key',
      name: 'fk_products_category', // tên constraint, nên đặt rõ ràng
      references: {
        table: 'Categories',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL' // hoặc 'CASCADE' nếu muốn xóa luôn product khi category bị xóa
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Products', 'fk_products_category');
  }
};
