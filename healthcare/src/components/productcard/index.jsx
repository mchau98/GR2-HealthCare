import React, { useState } from "react";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.salePrice
    ? (100 - (product.salePrice / product.price) * 100).toFixed(0)
    : null;

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString() : "Liên hệ";
  };

  const imageUrl =
    product.images?.length > 1 && isHovered
      ? product.images[1]
      : product.images?.[0] || "https://via.placeholder.com/400";

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount && <span className="badge discount">{discount}%</span>}

      <img src={imageUrl} alt="img" className="product-image" />

      <div className="product-info">
        <div className="name">{product.name}</div>
        <div className="price">
          {/* Hiển thị price cho tất cả sản phẩm */}
          <strong>{formatPrice(product.price)}₫</strong>
          {/* Hiển thị salePrice và gạch đi price nếu có salePrice */}
          {product.salePrice && product.price !== product.salePrice && (
            <span className="old-price">
              {formatPrice(product.salePrice)}₫
            </span>
          )}
        </div>
        <button className="add-btn">Thêm vào giỏ</button>
      </div>
    </div>
  );
}

export default ProductCard;
