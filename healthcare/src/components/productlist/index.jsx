import React, { useState, useEffect } from "react";
import ProductCard from "../productcard";
import Pagination from "../pagination"; // Import pagination component
import "./index.scss";
import { getProductByCategory, getAllProducts } from "../../services/productService";

function ProductList({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // 2 rows x 4 columns
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = categoryId
          ? await getProductByCategory(categoryId)
          : await getAllProducts();

        setProducts(data);
      } catch (err) {
        setError(err.message || "Lỗi không xác định");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    setCurrentPage(1);
  }, [categoryId]);

  // Pagination functions
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div className="loading">Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div className="error">Đã xảy ra lỗi: {error}</div>;
  }

  if (!products.length) {
    return <div className="no-products">Không có sản phẩm nào</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="products-container">
      <div className="product-grid">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default ProductList;