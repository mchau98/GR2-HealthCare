import { Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import CaloTracker from "../pages/caloTrack";
import MainLayout from "../../components/mainlayout";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Single from "../pages/singelpost";
import Product from "../pages/product";
import ProductDetail from "../pages/productdetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/caloTrack"
        element={<MainLayout component={<CaloTracker />} />}
      />
      <Route path="/" element={<MainLayout component={<Home />} />} />
      <Route path="/post/all" element={<MainLayout component={<Posts />} />} />
      <Route path="/post/:id" element={<MainLayout component={<Single />} />} />
      <Route path="/product/all" element={<MainLayout component={<Product />} />} />
      <Route path="/product/:id" element={<MainLayout component={<ProductDetail />} />} />
    </Routes>
  );
};

export default AllRoutes;
