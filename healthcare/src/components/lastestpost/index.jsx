import { useEffect, useState } from "react";
import "./index.scss";

const LatestPost = ({ category }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/posts/getPosts?category=${encodeURIComponent(category)}`
        );
        const result = await response.json();

        if (result.success && result.data.length > 0) {
          setPost(result.data[0]); // Lấy bài viết đầu tiên (mới nhất)
        }
      } catch (error) {
        console.error("Lỗi tải bài viết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, [category]);

  if (loading) return <p>Đang tải bài viết...</p>;
  if (!post) return <p>Không có bài viết nào.</p>;

  return (
    <article className="latest-post">
      <div className="latest-post__image">
        <a href={`/post/${post.id}`} className="latest-post__image-link">
          <img
            src={
              post.images?.length > 0
                ? post.images[0]
                : "https://bizweb.dktcdn.net/100/415/009/files/bi-quyet-goi-sua-me-ve-nhieu-tu-nhien-3.jpg?v=1728466730158"
            }
            alt={post.title}
            className="latest-post__img"
          />
        </a>
      </div>
      <div className="latest-post__content">
        <h3 className="latest-post__title">
          <a href={`/post/${post.id}`} className="latest-post__title-link">
            {post.title}
          </a>
        </h3>
        <p className="latest-post__summary">{post.summary}</p>
        <p className="latest-post__meta">
          {new Date(post.createdAt).toLocaleDateString()} - {post.author.name}
        </p>
      </div>
    </article>
  );
};

export default LatestPost;
