import { Routes, Route } from "react-router-dom";
import Test from "../pages/testpage";
import Register from "../pages/register";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AllRoutes;
