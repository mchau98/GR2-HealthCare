'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: "Ăn uống lành mạnh giúp cải thiện sức khỏe",
        content: "Chế độ ăn uống lành mạnh giúp cải thiện sức khỏe và tăng cường hệ miễn dịch. Bằng cách lựa chọn thực phẩm tự nhiên, hạn chế đồ chế biến sẵn, cơ thể sẽ hấp thụ đủ dưỡng chất cần thiết...",
        images: JSON.stringify(["image1.jpg", "image2.jpg"]),
        author_id: 1,
        category: "Ăn uống lành mạnh",
        tagSearch: JSON.stringify(["sức khỏe", "dinh dưỡng", "ăn kiêng"]),
        summary: null, // Để Sequelize tự động generate
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Cách giảm cân khoa học không ảnh hưởng sức khỏe",
        content: "Giảm cân không có nghĩa là nhịn ăn. Một chế độ giảm cân khoa học cần cân bằng giữa lượng calo tiêu thụ và lượng calo đốt cháy...",
        images: JSON.stringify(["weightloss.jpg"]),
        author_id: 2,
        category: "Giảm cân lành mạnh",
        tagSearch: JSON.stringify(["giảm cân", "calo", "tập luyện"]),
        summary: null, // Để Sequelize tự động generate
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Thực phẩm giàu dinh dưỡng dành cho dân văn phòng",
        content: "Những người làm việc văn phòng thường có ít thời gian để chuẩn bị bữa ăn, nhưng vẫn có thể lựa chọn thực phẩm giàu dinh dưỡng như hạt chia, yến mạch, cá hồi...",
        images: JSON.stringify(["healthyfood.jpg"]),
        author_id: 3,
        category: "Kiến thức dinh dưỡng",
        tagSearch: JSON.stringify(["văn phòng", "thực phẩm", "dinh dưỡng"]),
        summary: null, // Để Sequelize tự động generate
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
