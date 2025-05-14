import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/product/${product.id}`} className="link">
        <img src={imageUrl} alt="img" className="product-image" />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="link">
          <div className="name">{product.name}</div>
        </Link>
        <div className="price">
          {product.salePrice && product.price !== product.salePrice ? (
            <>
              <strong>{formatPrice(product.salePrice)}₫</strong>
              <span className="old-price">{formatPrice(product.price)}₫</span>
            </>
          ) : (
            <strong>{formatPrice(product.price)}₫</strong>
          )}
        </div>
        <button className="add-btn">Thêm vào giỏ</button>
      </div>
    </div>
  );
}

export default ProductCard;

