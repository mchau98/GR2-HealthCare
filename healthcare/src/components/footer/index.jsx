import "./index.scss";
import Logo from "../../assets/images/logoText.png";
import GGPlay from "../../assets/images/bg-login.webp";
import IOS from "../../assets/images/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
// import { useTranslation } from "react-i18next";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item-wrap">
        <div className="footer-item">
          <img src={Logo} alt="logo" className="footer-logo" />
        </div>
        <div className="footer-item">{"address"}</div>
        <div className="footer-item">{"phone"}</div>
        <div className="footer-item">{"email"}</div>
      </div>
      <div className="footer-item-wrap">
        <div className="footer-header header3">{"another_page"}</div>
        <div className="footer-item">{"promote"}</div>
        <div className="footer-item">{"create_trip"}</div>
        <div className="footer-item">{"guide"}</div>
        <div className="footer-item">{"contact"}</div>
      </div>
      <div className="footer-item-wrap">
        <div className="footer-header header3">{"sitemap"}</div>
        <div className="footer-item">{"place_attract"}</div>
        <div className="footer-item">{"util_place"}</div>
        <div className="footer-item">{"culinary"}</div>
        <div className="footer-item">{"accommodation"}</div>
        <div className="footer-item">{"special_food"}</div>
        <div className="footer-item">{"news"}</div>
      </div>
      <div className="footer-item-wrap">
        <div className="footer-header header3">{"account"}</div>
        <div className="footer-item">{"register"}</div>
        <div className="footer-item">{"login"}</div>
        <div className="footer-item">{"wishlist"}</div>
        <div className="footer-item">{"cart"}</div>
      </div>
      <div className="footer-item-wrap">
        <div className="footer-item-container">
          <div className="footer-header header3">{"follow"}</div>
          <div className="footer-item">
            <FontAwesomeIcon className="footer-icon" icon={faEarthAmericas} />
            {"e-port"}
          </div>
          <div className="footer-item">
            <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            Facebook
          </div>
        </div>
        <div className="footer-item-container">
          <div className="footer-header header3">{"download"}</div>
          <div className="footer-download">
            <img src={GGPlay} alt="gg play" className="footer-download-img" />
            <img src={IOS} alt="ios" className="footer-download-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
