import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MewMobileSlide.scss";

const slides = [
  {
    title: "NGŨ CỐC GRANOLA DINH DƯỠNG",
    link: "https://hebekery.vn/hat-ngu-coc-an-kieng",
    img: "//bizweb.dktcdn.net/100/415/009/themes/891117/assets/slide-img1.png",
  },
  {
    title: "BÁNH BISCOTTI ĂN KIÊNG",
    link: "https://hebekery.vn/banh-nuong-an-kieng",
    img: "//bizweb.dktcdn.net/100/415/009/themes/891117/assets/slide-img2.png",
  },
  {
    title: "BÁNH NGÓI HẠNH NHÂN KETO",
    link: "https://hebekery.vn/banh-ngoi-hanh-nhan-an-kieng-hat-chuan-keto",
    img: "//bizweb.dktcdn.net/100/415/009/themes/891117/assets/slide-img3.png",
  },
  {
    title: "TRÁI CÂY SẤY NHẬP KHẨU",
    link: "https://hebekery.vn/banh-ngoi-hanh-nhan-an-kieng-hat-chuan-keto",
    img: "//bizweb.dktcdn.net/100/415/009/themes/891117/assets/slide-img4.png?1736154757405",
  },
];

const MewMobileSlide = () => {
  return (
    <section className="mew-mobile-slide">
      <div className="container pb-5">
        <div className="mew-slide">
          <div className="tagline">"SỐNG LÀNH MẠNH" CÙNG LIFEBAKERY</div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{ delay: 3000 }}
            loop={true}
            className="swiper-container"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="slide-content">
                  <a href={slide.link} title={slide.title} className="box-img">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="slide-img"
                    />
                  </a>
                  <div className="slide-text">
                    <p className="title">{slide.title}</p>
                    <a
                      href={slide.link}
                      title={slide.title}
                      className="buy-now"
                    >
                      Mua ngay
                    </a>
                    <FontAwesomeIcon
                      className="slide-icon"
                      icon={faAngleRight}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MewMobileSlide;
