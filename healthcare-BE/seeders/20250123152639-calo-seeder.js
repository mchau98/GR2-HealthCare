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
      { name: "Pho", kalo: 350 },
      { name: "Banh Mi", kalo: 250 },
      { name: "Com Tam", kalo: 400 },
      { name: "Goi Cuon", kalo: 150 },
      { name: "Hu Tieu", kalo: 300 },
      { name: "Spring Rolls", kalo: 200 },
      { name: "Grilled Pork Rice", kalo: 450 },
      { name: "Beef Stew", kalo: 500 },
      { name: "Bun Bo Hue", kalo: 350 },
      { name: "Chicken Rice", kalo: 380 },
      { name: "Banana Cake", kalo: 180 },
      { name: "Sticky Rice", kalo: 220 },
      { name: "Fried Rice", kalo: 400 },
      { name: "Egg Coffee", kalo: 120 },
      { name: "Vietnamese Iced Coffee", kalo: 130 },
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
