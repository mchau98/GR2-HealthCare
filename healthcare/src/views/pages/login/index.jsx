import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../assets/images/logoText.png";
import BG from "../../../assets/images/bg-login.webp";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  // Kiểm tra email hợp lệ
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

  // Cập nhật state password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    console.log(email + " " + password); // Debug kiểm tra password có được cập nhật không

    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        sessionStorage.setItem("authToken", response.data.token);

        // Xử lý token
        const parts = response.data.token.split(".");
        const payload = parts[1];
        const decodedPayload = JSON.parse(atob(payload));

        sessionStorage.setItem("auth", JSON.stringify(decodedPayload));
        const role = decodedPayload.role;
        if (role === "user") {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else if (role === "admin") {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error.response?.data?.error || "Đăng nhập thất bại");
      toast.error(error.response?.data?.error || "Đăng nhập thất bại");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={Logo} alt="" width="120px" />
        <img src={BG} alt="" width="120px" />
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
