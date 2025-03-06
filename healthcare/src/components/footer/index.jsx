import React from "react";
import Logo from "../../assets/images/logoText.png";
import { CopyrightOutlined } from "@ant-design/icons";
import "./index.css";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" id="footer-img" />
      <span>
        <CopyrightOutlined />
        <span className="copyright">copyright 2024</span>
      </span>
    </footer>
  );
};
export default Footer;
