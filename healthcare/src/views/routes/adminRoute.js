// Trang này chỉ cho phép user có role === "admin" mới được truy cập.
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    // Chưa đăng nhập thì chuyển về login
    return <Navigate to="/login" replace />;
  }

  if (role !== "admin") {
    // Nếu không phải admin thì chuyển về trang không có quyền (hoặc trang chủ)
    return <Navigate to="/" replace />;
  }

  // Nếu là admin thì cho truy cập
  return children;
};

export default AdminRoute;
