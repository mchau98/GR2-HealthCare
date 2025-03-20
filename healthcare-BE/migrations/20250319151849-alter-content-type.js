module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Posts', 'content', {
      type: Sequelize.TEXT,
      allowNull: true, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Posts', 'content', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
  }
};
