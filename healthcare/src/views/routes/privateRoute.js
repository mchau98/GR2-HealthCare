// Trang này chỉ cho phép user đã đăng nhập (bất kỳ role nào cũng được truy cập).
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập thì cho truy cập trang
  return children;
};

export default PrivateRoute;
