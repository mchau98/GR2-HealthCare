import React from "react";
import "./index.scss";

const categories = [
  { id: null, title: "TẤT CẢ SẢN PHẨM" },  
  { id: 1, title: "BÁNH BISCOTTI NGUYÊN CÁM" },
  { id: 2, title: "HẠT NGŨ CỐC GRANOLA" },
  { id: 3, title: "BÁNH GÓI HẠNH NHÂN KETO" },
  { id: 4, title: "THANH NĂNG LƯỢNG SIÊU HẠT" },
  { id: 5, title: "HẠT VÀ TRÁI CÂY SẤY NHẬP" },
  { id: 6, title: "BÚN, NUI, MÌ GẠO LỨT" },
];

const PdNav = ({ onCategorySelect, activeCategoryId }) => {
  return (
    <div className="navbar-vertical">
      {categories.map((item) => (
        <div key={item.id ?? 'all'} className="nav-item">
          <div
            title={item.title}
            className={`nav-link ${item.id === activeCategoryId ? "active" : ""}`}
            onClick={() => onCategorySelect(item.id)}
            style={{ cursor: "pointer" }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PdNav;
