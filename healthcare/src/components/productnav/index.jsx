import React from "react";
import "./index.scss";

const categories = [
  { title: "· SẢN PHẨM MỚI", link: "/product/all" },
  {
    title: "· BÁNH BISCOTTI NGUYÊN CÁM",
    link: "/banh-biscotti-nguyen-cam-hebekery",
  },
  { title: "· HẠT NGŨ CỐC GRANOLA", link: "/hat-ngu-coc-granola" },
  { title: "· BÁNH NGÓI HẠNH NHÂN KETO", link: "/banh-ngoi-hanh-nhan" },
  {
    title: "· THANH NĂNG LƯỢNG SIÊU HẠT",
    link: "/energy-bar-thanh-nang-luong",
  },
  { title: "· HẠT & TRÁI CÂY SẤY NHẬP", link: "/hat-trai-cay-say-nhap-khau" },
  {
    title: "· Bún, Nui, Mì Gạo Lứt",
    link: "/bun-pho-banh-canh-nui-mi-gao-lut",
  },
  { title: "· Demee - Để Mẹ Lo", link: "/demee-de-me-lo" },
  { title: "· Phurba - Tinh Hoa Thảo Dược", link: "/phurba" },
];

const activeLink = "/product/all"; // bạn có thể lấy từ router

const PdNav = () => {
  return (
    <div className="navbar-vertical">
      {categories.map((item, index) => (
        <div key={index} className="nav-item">
          <a
            href={item.link}
            title={item.title}
            className={`nav-link ${item.link === activeLink ? "active" : ""}`}
          >
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PdNav;
