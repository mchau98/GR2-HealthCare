import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./views/routes";
import "./index.scss";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
      <BrowserRouter>
       <AuthProvider>
         <AllRoutes />
       </AuthProvider>
      </BrowserRouter>   
  );
}

export default App;
