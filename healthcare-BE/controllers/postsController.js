const { getPostsByCat, getPostById } = require("../queries/postsQuery");

const getPosts = async (req, res) => {
    try {
      const { category } = req.query; 
      const posts = await getPostsByCat(category);
  
      return res.status(200).json({ success: true, data: posts });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

  const getPost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await getPostById(id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports = { getPosts, getPost };
