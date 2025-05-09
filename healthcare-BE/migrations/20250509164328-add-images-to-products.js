'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'images', {
      type: Sequelize.TEXT('long'), // 'long' cho phép lưu chuỗi dài (như JSON stringify mảng ảnh)
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'images');
  },
};
