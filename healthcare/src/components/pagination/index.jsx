import React from "react";
import "./index.scss";

function Pagination({ currentPage, totalPages, paginate, prevPage, nextPage }) {
  return (
    totalPages > 1 && (
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
        >
          &laquo;
        </button>

        <div className="pagination-numbers">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`pagination-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`pagination-button ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          &raquo;
        </button>
      </div>
    )
  );
}

export default Pagination;
