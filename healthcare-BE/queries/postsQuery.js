const db = require("../models/index");

const getPostsByCat = async (category) => {
  const filter = {};
  if (category) {
    filter.category = category; // Lọc theo danh mục nếu có
  }

  return await Post.findAll({
    where: filter,
    attributes: ['id', 'title', 'content', 'images', 'category', 'tagSearch', 'createdAt'],
    include: [
      {
        model: User,
        as: 'author',
        attributes: ['id', 'name']
      }
    ],
    order: [['createdAt', 'DESC']] // Sắp xếp bài viết mới nhất lên đầu
  });
};

module.exports = { getPostsByCat };
