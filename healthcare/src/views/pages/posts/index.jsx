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
        <div class="col-12">
          <article class="blog-item-list bls clearfix row pt-4 pb-4 pb-lg-0 align-items-center align-items-lg-start">
            <div class="col-4 col-lg-6">
              <a
                href="/yoga-la-gi-loi-ich-cua-viec-thuc-hanh-yoga-doi-voi-me-sau-sinh"
                class="d-block modal-open thumb_img_blog_list thumb boder-20"
                title="Yoga l&#224; g&#236;? Lợi &#237;ch của việc thực h&#224;nh yoga đối với mẹ sau sinh"
              >
                <span class="modal-open position-relative d-block w-100 m-0 ratio10by7 has-edge aspect zoom">
                  <img
                    src="//bizweb.dktcdn.net/100/415/009/themes/891117/assets/placeholder_1x1.png?1736154757405"
                    data-src="//bizweb.dktcdn.net/100/415/009/articles/yoga-la-gi-loi-ich-cua-viec-thuc-hanh-yoga-doi-voi-me-sau-sinh.jpg?v=1728467381893"
                    decoding="async"
                    alt="Yoga l&#224; g&#236;? Lợi &#237;ch của việc thực h&#224;nh yoga đối với mẹ sau sinh"
                    class="lazy d-block img img-cover position-absolute"
                  />
                </span>
              </a>
            </div>
            <div class="blogs-rights col-8 col-lg-6 pl-lg-4">
              <h3 class="blog-item-name font-weight-bold mb-2 title_blo">
                <a
                  class="font-sz26 color-main"
                  href="/yoga-la-gi-loi-ich-cua-viec-thuc-hanh-yoga-doi-voi-me-sau-sinh"
                  title="Yoga l&#224; g&#236;? Lợi &#237;ch của việc thực h&#224;nh yoga đối với mẹ sau sinh"
                >
                  Yoga l&#224; g&#236;? Lợi &#237;ch của việc thực h&#224;nh
                  yoga đối với mẹ sau sinh
                </a>
              </h3>

              <div class="sum line_3 mb-2 mb-lg-3 h-auto">
                <p>
                  Xin chào các mẹ! Chắc hẳn sau khi sinh bé, mẹ đã trải qua rất
                  nhiều thay đổi về cơ thể lẫn tinh thần. Việc chăm sóc bé yêu
                  và cùng lúc đó là hồi phục sức khỏe của chính mình có thể là
                  một thử thách không nhỏ. Nhưng mẹ đừng lo, một giải pháp tuyệt
                  vời đang chờ mẹ ở đây – đó chính là yoga. Hôm nay, chúng ta sẽ
                  cùng tìm hiểu về yoga và những lợi ích tuyệt vời mà yoga mang
                  lại cho các mẹ sau sinh nhé!
                  
                </p>
              </div>

              <div class="post-time small color1e2">
                09/10/2024 - Nguyễn Thu Phương MKT
              </div>
            </div>
          </article>
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
