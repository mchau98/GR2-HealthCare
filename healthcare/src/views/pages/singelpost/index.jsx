import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";
import { getPostById } from "../../../services/postService";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  //   const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostById(postId); // Gọi từ service
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    fetchData();
  }, [postId]);

  //   const handleDelete = async () => {
  //     try {
  //       await axios.delete(`/posts/${postId}`);
  //       navigate("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <div className="single">
      <div className="content">
        <img
          src={post.images?.length > 0 ? post.images[0] : ""}
          alt={post.title}
          className="latest-post__img"
        />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )} */}
        </div>
        <h1>{post.title}</h1>
        <img
          src={post.images?.length > 0 ? post.images[1] : ""}
          alt={post.title}
          className="latest-post__img"
        />
        {post.content}
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      {/* <Menu cat={post.cat} /> */}
    </div>
  );
};

export default Single;
