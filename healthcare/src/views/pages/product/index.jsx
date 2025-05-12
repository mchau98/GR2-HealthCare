import './index.scss';
import React, { useState } from 'react';
import ProductList from '../../../components/productlist';
import PdNav from '../../../components/productnav';

const Product = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null); // null = TẤT CẢ SẢN PHẨM

  const handleCategorySelect = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  const getCategoryTitle = (id) => {
    switch (id) {
      case 1: return "BÁNH BISCOTTI NGUYÊN CÁM";
      case 2: return "HẠT NGŨ CỐC GRANOLA";
      case 3: return "BÁNH GÓI HẠNH NHÂN KETO";
      case 4: return "THANH NĂNG LƯỢNG SIÊU HẠT";
      case 5: return "HẠT VÀ TRÁI CÂY SẤY NHẬP";
      case 6: return "BÚN, NUI, MÌ GẠO LỨT";
      default: return "TẤT CẢ SẢN PHẨM";
    }
  };

  return (
    <div className="product-container">
      <div className="product-navbar">
        <PdNav 
          onCategorySelect={handleCategorySelect}
          activeCategoryId={activeCategoryId}
        />
      </div>
      <div className="product-content">
        <h1>{getCategoryTitle(activeCategoryId)}</h1>
        <ProductList categoryId={activeCategoryId} />
      </div>
    </div>
  );
};

export default Product;
