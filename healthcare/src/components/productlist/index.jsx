import React from "react";
import ProductCard from "../productcard";

const products = [
  {
    id: 1,
    name: "Cookies Hạnh Nhân Nguyên Cám - Bánh Cookies Ăn Vặt Chuẩn Healthy HeBekery",
    price: 95000,
    oldPrice: null,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/009/products/vn-11134207-7r98o-lt0d5dhnc24k39.webp?v=1739936616860",
    isHot: true,
    available: true,
  },
  {
    id: 2,
    name: "[Hộp 300gr] Biscotti Nguyên Cám Low Calories 4 Vị - Bánh Ngũ Cốc Nướng Ăn Kiêng",
    price: 170000,
    oldPrice: null,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/009/products/biscotti-hop.webp",
    available: false,
  },
  {
    id: 3,
    name: "[Hũ 150gr] Biscotti Nguyên Cám Low Calories 4 Vị Hebekery",
    price: 85000,
    oldPrice: null,
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/009/products/biscotti-hu.webp",
    rating: 5,
    available: true,
  },
  {
    id: 4,
    name: "Thanh Hạt Granola Bar Rong Biển Nhật Bản Hebekery",
    price: 99000,
    oldPrice: 130000,
    discount: "-24%",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/415/009/products/granola-bar.webp",
    available: false,
  },
  // Thêm sản phẩm nếu muốn
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
