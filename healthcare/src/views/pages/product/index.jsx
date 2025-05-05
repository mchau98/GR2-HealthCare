import './index.scss';
import React from 'react';
import ProductList from '../../../components/productlist';
import PdNav from '../../../components/productnav';

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-navbar">
        <PdNav />
      </div>
      <div className="product-content">
        <h1>TẤT CẢ SẢN PHẨM</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default Product;
