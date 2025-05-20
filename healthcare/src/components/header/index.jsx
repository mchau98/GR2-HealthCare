import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logoText.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/authContext";
import { Dropdown, Space } from "antd";
import "./index.scss";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleMenuClick = ({ key }) => {
    if (key === "profile") {
      navigate("/userprofile");
    } else if (key === "logout") {
      logout();
      navigate("/");
    }
  };

  const items = [
    {
      key: 'account',
      label: 'My Account',
      disabled: true,
    },
    {
      key: "profile",
      label: "Thông tin cá nhân",
    },
    {
      key: "logout",
      label: "Đăng xuất",
    },
  ];

  return (
    <div className="navbar">
      <div className="nav-head">
        <h5>"Sống khỏe mỗi ngày – Lan tỏa năng lượng tích cực!"</h5>
      </div>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/caloTrack"><h6>NHẬT KÝ</h6></Link>
          <Link className="link" to="/product/all"><h6>SẢN PHẨM</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>TÍNH TDEE</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>TÍNH BMI</h6></Link>
          <Link className="link" to="/post/all"><h6>KIẾN THỨC</h6></Link>

          <Link className="link" to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>

          {isAuthenticated ? (
            <Dropdown
              menu={{ items, onClick: handleMenuClick }}
              trigger={["click"]}            
            >
              <a onClick={(e) => e.preventDefault()} className="link user-dropdown">
                <Space>
                  <FontAwesomeIcon icon={faUser} />
                </Space>
              </a>
            </Dropdown>
          ) : (
            <Link className="link" to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}

          <Link className="link" to="/">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
