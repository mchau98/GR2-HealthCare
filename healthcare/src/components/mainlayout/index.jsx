import Header from "../header";
import Footer from "../footer";
import "./index.scss";
function MainLayout(props) {
  return (
    <div className="main-container">
      <Header />

      <div className="body">{props.component}</div>

      <Footer />
    </div>
  );
}

export default MainLayout;
