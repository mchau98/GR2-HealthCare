import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.isHot && <span className="badge hot">HOT</span>}
      {product.discount && <span className="badge discount">{product.discount}</span>}

      <img className="product-image" src={product.image} alt={product.name} />

      <div className="product-info">
        {product.rating && (
          <div className="rating">
            <span>{product.rating}★</span>
            <span>(1)</span>
          </div>
        )}
        <div className="name">{product.name}</div>
        <div className="price">
          <strong>{product.price.toLocaleString()}₫</strong>
          {product.oldPrice && <span className="old-price">{product.oldPrice.toLocaleString()}₫</span>}
        </div>
        <button
          className={`add-btn ${!product.available ? "disabled" : ""}`}
          disabled={!product.available}
        >
          {product.available ? "Thêm vào giỏ" : "Cháy hàng"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
