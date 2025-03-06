import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./views/routes";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
