import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Logo from "../../../assets/images/logoText.png";
import BG from "../../../assets/images/bg-login.webp";
import { useAuth } from "../../../contexts/authContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateInputs = () => {
    let valid = true;

    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(username)) {
      setUsernameError("Username chỉ chứa chữ cái, số (4-20 ký tự).");
      valid = false;
    } else setUsernameError("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email không hợp lệ.");
      valid = false;
    } else setEmailError("");

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Số điện thoại phải có đúng 10 chữ số.");
      valid = false;
    } else setPhoneError("");

    if (password !== confirmPassword) {
      setPasswordError("Mật khẩu nhập lại không khớp!");
      valid = false;
    } else setPasswordError("");

    return valid;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    const result = await register({
      name: username,
      email,
      phone,
      password,
    });

    if (result.success) {
      toast.success("Đăng ký thành công!");
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error(result.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={Logo} alt="Logo" width="120px" />
        <img src={BG} alt="Background" width="120px" />
      </div>

      <div className="login-form">
        <h2>Đăng ký</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Nhập username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {usernameError && <p className="error-text">{usernameError}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>

          <div className="input-group">
            <label>Số điện thoại</label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>

          <button type="button" className="login-btn" onClick={handleRegister}>
            Đăng ký
          </button>
        </form>

        <p className="register-text">
          Đã có tài khoản?{" "}
          <Link to="/login" className="register-link">
            Đăng nhập
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
