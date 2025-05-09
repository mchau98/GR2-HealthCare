'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Products', 'name', {
      type: Sequelize.TEXT, // hoặc Sequelize.STRING(1024)
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Products', 'name', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
