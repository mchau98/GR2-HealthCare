import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [id, setId] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem("auth_token", token);
    setIsAuthenticated(true);

    try {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
      setId(decodedToken.id);
    } catch (error) {
      console.error("Token không hợp lệ:", error);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", { email, password });
      const token = response.data.token;
      saveToken(token);
      return { success: true };
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response?.data || error.message);
      return { success: false, message: error.response?.data?.message || "Đăng nhập thất bại" };
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/register", userData);
      const token = response.data.token;
      saveToken(token); // Nếu muốn auto login sau khi đăng ký
      return { success: true };
    } catch (error) {
      console.error("Lỗi đăng ký:", error.response?.data || error.message);
      return { success: false, message: error.response?.data?.message || "Đăng ký thất bại" };
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
    setRole(null);
    setId(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAuthenticated(true);
        setRole(decoded.role);
        setId(decoded.id);
      } catch (err) {
        console.error("Token lỗi:", err);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, id, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
