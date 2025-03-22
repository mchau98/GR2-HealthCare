import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LatestPost from "../../../components/lastestpost";
import PostsPagination from "../../../components/postpagination";

const Posts = () => {
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
          <div className="blog-item">
            <LatestPost category="Kiến thức dinh dưỡng" />
            <PostsPagination
              category="Kiến thức dinh dưỡng"
              showPagination={false}
            />
          </div>
        </div>
      </div>
  );
};

export default Posts;
