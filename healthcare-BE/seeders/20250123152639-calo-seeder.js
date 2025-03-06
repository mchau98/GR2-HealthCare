"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("calories", [
      { name: "Pho", calories: 350 },
      { name: "Banh Mi", calories: 250 },
      { name: "Com Tam", calories: 400 },
      { name: "Goi Cuon", calories: 150 },
      { name: "Hu Tieu", calories: 300 },
      { name: "Spring Rolls", calories: 200 },
      { name: "Grilled Pork Rice", calories: 450 },
      { name: "Beef Stew", calories: 500 },
      { name: "Bun Bo Hue", calories: 350 },
      { name: "Chicken Rice", calories: 380 },
      { name: "Banana Cake", calories: 180 },
      { name: "Sticky Rice", calories: 220 },
      { name: "Fried Rice", calories: 400 },
      { name: "Egg Coffee", calories: 120 },
      { name: "Vietnamese Iced Coffee", calories: 130 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
