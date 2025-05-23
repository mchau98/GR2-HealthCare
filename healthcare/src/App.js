import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./views/routes";
import "./index.scss";
import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
            <CartProvider>
                <AllRoutes />
            </CartProvider>
        </AuthProvider>
      </BrowserRouter>   
  );
}

export default App;
