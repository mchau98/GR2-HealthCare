import { useEffect, useState } from "react";
import "./index.scss";

const PostsPagination = ({ category, showPagination = true }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Hiển thị 3 bài mỗi trang

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/posts/getPosts?category=${encodeURIComponent(
            category
          )}`
        );
        const result = await response.json();

        if (result.success) {
          let sortedPosts = result.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          // Loại bỏ bài viết mới nhất
          const latestPostId =
            sortedPosts.length > 0 ? sortedPosts[0].id : null;
          const filteredPosts = sortedPosts.filter(
            (post) => post.id !== latestPostId
          );

          setPosts(filteredPosts);
        }
      } catch (error) {
        console.error("Lỗi tải bài viết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  // Tính toán số trang
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <p>Đang tải bài viết...</p>;
  if (posts.length === 0) return <p>Không có bài viết nào.</p>;

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {currentPosts.map((post) => (
          <article key={post.id} className="post-card">
            <a href={`/post/${post.id}`} className="post-card__image-link">
              <img
                src={
                  post.images?.length > 0
                    ? post.images[0]
                    : "https://via.placeholder.com/400"
                }
                alt={post.title}
                className="post-card__image"
              />
            </a>
            <div className="post-card__content">
              <h3 className="post-card__title">
                <a href={`/post/${post.id}`} className="post-card__title-link">
                  {post.title}
                </a>
              </h3>
              <p className="post-card__summary">{post.summary}</p>
              <p className="post-card__meta">
                {new Date(post.createdAt).toLocaleDateString()} -{" "}
                {post.author.name}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Chỉ hiển thị pagination nếu showPagination = true */}
      {showPagination && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsPagination;
