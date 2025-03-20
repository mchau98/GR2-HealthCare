"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      // 🔹 Đặt tên bảng chuẩn số nhiều
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      images: {
        type: Sequelize.TEXT, // 🔹 Lưu JSON dưới dạng TEXT
        allowNull: true,
      },
      author_id: {
        // 🔹 Thêm author_id làm khóa ngoại
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User", // Trỏ đến bảng Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      category: {
        type: Sequelize.ENUM(
          "Kiến thức dinh dưỡng",
          "Ăn uống lành mạnh",
          "Giảm cân lành mạnh"
        ),
        allowNull: false,
      },
      tagSearch: {
        type: Sequelize.TEXT, 
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: { 
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
