import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/authContext"; // Đảm bảo đúng đường dẫn
import "./index.scss";
import Logo from "../../../assets/images/logoText.png";
import BG from "../../../assets/images/bg-login.webp";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // login từ context
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setEmailError("Email không hợp lệ.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();

    if (emailError) {
      toast.error("Vui lòng nhập email hợp lệ.");
      return;
    }

    const result = await login(email, password); // Gọi từ context

    if (result.success) {
      toast.success("Đăng nhập thành công!");

      setTimeout(() => {
        navigate("/"); // Điều hướng tùy theo role (có thể xử lý trong App Router)
      }, 2000);
    } else {
      toast.error(result.message || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={Logo} alt="Logo" width="120px" />
        <img src={BG} alt="Background" width="120px" />
      </div>

      <div className="login-form">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleFinish}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
        </form>

        <p className="register-text">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="register-link">
            Đăng ký ngay
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
