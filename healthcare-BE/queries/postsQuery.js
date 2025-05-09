const db = require("../models/index");

const getPostsByCat = async (category) => {
  const filter = {};
  if (category) {
    filter.category = category;
  }

  let posts = await db.Post.findAll({
    where: filter,
    attributes: [
      "id",
      "title",
      "content",
      "images",
      "category",
      "tagSearch",
      "createdAt",
    ],
    include: [
      {
        model: db.User,
        as: "author",
        attributes: ["id", "name"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  posts = posts.map((post) => {
    return {
      ...post.get({ plain: true }), 
      summary: post.content ? post.content.substring(0, 300) : null,
    };
  });

  return posts;
};

const getPostById = async (postId) => {
  try {
    return await db.Post.findOne({
      where: { id: postId },
      include: [
        {
          model: db.User,
          as: "author",
          attributes: ["id", "name", "email"],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { getPostsByCat, getPostById };
