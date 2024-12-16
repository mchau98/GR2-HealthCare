import "./index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">NutriTrack</div>
        <nav className="nav-links">
          <a href="#about">Về Nutri Track</a>
          <a href="#tdee">Tính TDEE</a>
          <a href="#bmi">Tính BMI</a>
          <a href="#calories">Tính Calo</a>
          <a href="#products">Sản phẩm</a>
          <a href="#knowledge">Kiến thức</a>
        </nav>
        <div className="header-icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </header>
  );
}

export default Header;
