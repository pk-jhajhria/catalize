import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Identify from "./components/Identify";
import Close from "./components/Close";
import Target from "./components/Target";
import Platform from "./components/Platform";
import Header from "./components/Header";
import shodow from "../src/assets/img/png/green-shadow.png";
import Watch from "./components/Watch";
import OurApproch from "./components/OurApproch";
import Accordian from "./components/Accordian";
import Users from "./components/Users";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      {" "}
      <Loader />
      <BackToTop />
      <div className=" bg_Lightwhite">
        <div className=" position-relative">
          <img
            className="position-absolute z_index_1 green_shadow_header end-0"
            src={shodow}
            alt="shadow"
          />
          <div style={{ zIndex: " 123 ", position: "relative" }}>
            <Nav />
          </div>
          <Header />
        </div>
        {/* <Watch /> */}
        <Identify />
        <Platform />
        <OurApproch />
        <Close />
        <Accordian />
        <Users />
        <Target />
        <Footer />
      </div>
    </>
  );
}

export default App;
