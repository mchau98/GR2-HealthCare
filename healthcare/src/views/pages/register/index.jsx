import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import Logo from "../../../assets/images/logoText.png";
import BG from "../../../assets/images/bg-login.webp";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleFinish = async () => {
    console.log(username + " " + email + " " + password + " " + phone);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        {
          email: email,
          password: password,
          name: username,
          phone: phone,
        }
      );

      // Xử lý khi đăng nhập thành công
      if (response.status === 200) {
        toast.success(response.data.message);
        sessionStorage.setItem("authToken", response.data.token);
        //Xử lý token
        const parts = response.data.token.split("."); // Tách token thành 3 phần
        const payload = parts[1];
        const decodedPayload = JSON.parse(atob(payload)); // Giải mã Base64
        sessionStorage.setItem("auth", JSON.stringify(decodedPayload));
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      // Xử lý lỗi từ server
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  // Kiểm tra username hợp lệ
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(value)) {
      setUsernameError("Username chỉ chứa chữ cái, số (4-20 ký tự).");
    } else {
      setUsernameError("");
    }
  };

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

  // Kiểm tra số điện thoại hợp lệ
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (!/^\d*$/.test(value)) {
      setPhoneError("Số điện thoại chỉ được chứa số.");
    } else if (value.length !== 10) {
      setPhoneError("Số điện thoại phải có đúng 10 chữ số.");
    } else {
      setPhoneError("");
    }
  };

  // Kiểm tra nhập lại mật khẩu
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setPasswordError("Mật khẩu nhập lại không khớp!");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={Logo} alt="" width="120px" />
        <img src={BG} alt="" width="120px" />
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
              onChange={handleUsernameChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePhoneChange}
              required
            />
            {phoneError && <p className="error-text">{phoneError}</p>}
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>
          <button
            type="button"
            className="login-btn"
            disabled={
              usernameError || emailError || phoneError || passwordError
            }
            onClick={handleFinish}
          >
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
