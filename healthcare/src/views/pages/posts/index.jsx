import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  //   const [posts, setPosts] = useState([]);

  //   const cat = useLocation().search;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get(`/posts${cat}`);
  //         setPosts(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchData();
  //   }, [cat]);
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="posts-home">
      <h1 class="blog-name">Kiến thức</h1>
      <p class="blog-about">
        Các bài viết để giúp tươi trẻ mỗi ngày cùng LifeBakery
      </p>
      <div class="nav-blog col-12 mt-2 mb-4 position-relative">
        <div class="mn_box mb-0 mb-lg-4 pb-2 text-center position-relative">
          <div class="li_menu blog-all">
            <a
              class="link active d-inline-block"
              href="/blogs/all"
              title="Kiến thức"
            >
              Kiến thức
            </a>
          </div>

          <div class="li_menu">
            <a
              class="link  d-inline-block"
              href="/kien-thuc-dinh-duong"
              title="Kiến thức dinh dưỡng"
            >
              Kiến thức dinh dưỡng
            </a>
          </div>

          <div class="li_menu">
            <a
              class="link  d-inline-block"
              href="/an-uong-lanh-manh"
              title="Ăn uống lành mạnh"
            >
              Ăn uống lành mạnh
            </a>
          </div>

          <div class="li_menu">
            <a
              class="link  d-inline-block"
              href="/giam-can-lanh-manh-ben-vung"
              title="Giảm cân lành mạnh"
            >
              Giảm cân lành mạnh
            </a>
          </div>
        </div>
      </div>
      <div className="blog-all-item">
        <div className="title">
          <h2 class="blog-name"> Kiến thức dinh dưỡng</h2>
          <p class="see-all">
            Xem tất cả <FontAwesomeIcon icon={faChevronRight} />
          </p>
        </div>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
