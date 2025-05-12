import React, { useState } from "react";
import "./index.scss";

const ProductDetail = () => {
  const [selectedWeight, setSelectedWeight] = useState("250gr");
  const [selectedFlavor, setSelectedFlavor] = useState("Cranberry Cheese");

  const weights = ["150gr", "150", "250gr"];
  const flavors = ["Cranberry Cheese", "Mango Matcha", "Dark Choco"];

  return (
    <div className="product-detail">
      <div className="product-detail__left">
        <img
          className="main-image"
          src="/assets/images/product-main.png"
          alt="Cookies"
        />
        <div className="product-detail__thumbnails">
          <img src="/assets/images/thumb1.png" alt="thumb1" />
          <img src="/assets/images/thumb2.png" alt="thumb2" />
        </div>
      </div>

      <div className="product-detail__right">
        <h2 className="brand">HEBEKERY BY HEBE</h2>
        <div className="rating">⭐ Viết đánh giá của bạn</div>
        <div className="price">140.000₫</div>

        <div className="discounts">
          <p>MÃ GIẢM GIÁ</p>
          <div className="codes">
            {["7.000₫", "15.000₫", "30.000₫", "50.000₫", "70.000₫"].map((d, idx) => (
              <span key={idx} className="code">{`Giảm ${d}`}</span>
            ))}
          </div>
        </div>

        <div className="weight">
          <p>TRỌNG LƯỢNG</p>
          <div className="options">
            {weights.map((w, idx) => (
              <button
                key={idx}
                className={selectedWeight === w ? "active" : ""}
                onClick={() => setSelectedWeight(w)}
              >
                Hũ {w}
              </button>
            ))}
          </div>
        </div>

        <div className="combo">
          <p>[COMBO TIẾT KIỆM] 3 HŨ x Cookies Hạnh Nhân Nguyên Cám Vị Dark Choco - Hũ 250gr</p>
        </div>

        <div className="flavors">
          <p>VỊ</p>
          <div className="options">
            {flavors.map((f, idx) => (
              <button
                key={idx}
                className={selectedFlavor === f ? "active" : ""}
                onClick={() => setSelectedFlavor(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
