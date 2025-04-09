import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import Logo from "../../assets/images/logoText.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
const Header = () => {
  const isLoggedIn = sessionStorage.getItem("authToken") !== null;
  return (
    <div className="navbar">
      <div className="nav-head">
        <h5>"Sống khỏe mỗi ngày – Lan tỏa năng lượng tích cực!" </h5>
      </div>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/caloTrack">
            <h6>NHẬT KÝ</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6> SẢN PHẨM </h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TÍNH TDEE</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>TÍNH BMI</h6>
          </Link>
          <Link className="link" to="/post/all">
            <h6>KIẾN THỨC</h6>
          </Link>

          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          {/* <span className="write">
            <Link className="link" to="/write">
              Viết
            </Link>
          </span> */}
          <Link className="link" to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link className="link" to={isLoggedIn ? "/userprofile" : "/login"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link className="link" to="/">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
