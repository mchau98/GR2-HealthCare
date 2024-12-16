import AllRoutes from "./views/routes";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <AllRoutes />
    </HashRouter>
  );
}

export default App;
