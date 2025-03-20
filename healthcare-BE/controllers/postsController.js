const { getPostsByCat } = require("../queries/postsQuery");

const getPosts = async (req, res) => {
    try {
      const { category } = req.query; // Lấy category từ query params
      const posts = await getPostsByCat(category);
  
      return res.status(200).json({ success: true, data: posts });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

module.exports = { getPosts };
