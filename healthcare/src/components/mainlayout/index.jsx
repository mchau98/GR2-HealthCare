import Header from "../header";
import Footer from "../footer";
import "./index.scss";
function MainLayout(props) {
  return (
    <div className="main-container">
      <Header />

      <main
        // style={{
        //   backgroundColor: "var(--white-color)",
        //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        //   borderRadius: "20px",
        // }}
      >
        {props.component}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
