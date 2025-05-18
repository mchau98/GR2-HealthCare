import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("Cranberry Cheese");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const flavors = ["Cranberry Cheese", "Mango Matcha", "Dark Choco"];
  const classification = (product.classification);

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/product/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [productId]);

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString() : "Liên hệ";
  };

  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} ${product.name} (${selectedWeight}, ${selectedFlavor}) vào giỏ hàng!`);
  };

  const discount = product.salePrice
    ? (100 - (product.salePrice / product.price) * 100).toFixed(0)
    : null;

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: (index) => setCurrentImageIndex(index),
    asNavFor: thumbnailSlider,
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: false,
    swipeToSlide: true,
    arrows: true,
    asNavFor: mainSlider,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const hasImages = product.images && product.images.length > 0;

  return (
    <div className="product-detail">
      <div className="product-detail__left">
        {hasImages ? (
          <>
            <div className="main-slider-container">
              <Slider 
                {...mainSliderSettings} 
                ref={slider => setMainSlider(slider)}
                className="main-slider"
              >
                {product.images.map((img, idx) => (
                  <div key={idx} className="main-slide">
                    <img src={img} alt={`${product.name} - Ảnh ${idx + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="thumbnail-slider-container">
              <Slider
                {...thumbnailSettings}
                ref={slider => setThumbnailSlider(slider)}
                className="thumbnail-slider"
              >
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail-slide ${idx === currentImageIndex ? "active" : ""}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : (
          <div className="image-placeholder">
            <p>Không có hình ảnh</p>
          </div>
        )}
      </div>
      <div className="product-detail__right">
        <h2 className="brand">{product.name}</h2>
        <div className="rating">⭐ Viết đánh giá của bạn</div>
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
        <div className="discounts">
          <p>MÃ GIẢM GIÁ</p>
          <div className="codes">
            {["7.000₫", "15.000₫", "30.000₫", "50.000₫", "70.000₫"].map(
              (d, idx) => (
                <span key={idx} className="code">{`Giảm ${d}`}</span>
              )
            )}
          </div>
        </div>

        <div className="weight">
          <p>PHÂN LOẠI</p>
          <div className="options">
            {classification?.map((w, idx) => (
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

        {/* <div className="combo">
          <p>
            [COMBO TIẾT KIỆM] 3 HŨ x Cookies Hạnh Nhân Nguyên Cám Vị Dark Choco - Hũ 250gr
          </p>
        </div> */}

        {/* <div className="flavors">
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
        </div> */}

        <div className="quantity-section">
          <p>SỐ LƯỢNG</p>
          <div className="quantity-selector">
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(prev => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="add-to-cart-section">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
          <button className="buy-now-btn">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;