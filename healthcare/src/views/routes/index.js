import { Routes, Route } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import CaloTracker from "../pages/caloTrack";
import MainLayout from "../../components/mainlayout";
import Home from "../pages/home";
import Posts from "../pages/posts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/caloTrack"
        element={<MainLayout component={<CaloTracker />} />}
      />
      <Route
        path="/"
        element={<MainLayout component={<Home />} />}
      />
      <Route
        path="/posts"
        element={<MainLayout component={<Posts />} />}
      />
    </Routes>
  );
};

export default AllRoutes;
