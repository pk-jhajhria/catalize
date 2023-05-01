import React, { useState } from "react";
import nav_logo from "../assets/img/png/nav logo.png";
import services from "../assets/img/svg/services.svg";
import estate from "../assets/img/svg/Estate.svg";
import logIn from "../assets/img/svg/log in.svg";

function Nav() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <section className="py-lg-3 pb-3 position-relative">
        <nav className=" z_index_3 position-relative bg-white mx-md-3 rounded-2 py-3">
          <div
            className="container"
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex gap-5 align-items-center justify-content-center">
                {" "}
                <a
                  className="ff_inter fw-bold fs_2xl text-white z_index1 my-2"
                  href="#"
                >
                  <img src={nav_logo} alt="nav_logo" />
                </a>{" "}
                <ul className="d-flex gap-3 gap-xl-5 ps-4 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                  <span className="d-flex align-items-center">
                    <a href="#">
                      <img
                        className="range_img_size"
                        src={services}
                        alt="services"
                      />
                    </a>{" "}
                    <a
                      className="fw-semibold fs_xl text-black ps-2 d-inline-block text_stroke_nav"
                      href="#"
                    >
                      Financial Services
                    </a>
                  </span>
                  <span className="d-flex align-items-center">
                    <a href="#">
                      {" "}
                      <img
                        className="range_img_size"
                        src={estate}
                        alt="estate"
                      />
                    </a>
                    <a
                      className="fw-semibold fs_xl text-black ps-2 d-inline-block text_stroke_nav"
                      href="#"
                    >
                      Real Estate
                    </a>
                  </span>
                </ul>
              </div>
              <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                <span className=" primary_btn">
                  <a
                    className="fw-semibold text_green fs_md text_hover rounded-2 sign_up_btn"
                    href="#"
                  >
                    Sign up
                  </a>
                </span>
                <span className="primary_btn_border">
                  <a
                    className=" fw-semibold fs_md text_green text_hover rounded-2 log_in_btn"
                    href="#"
                  >
                    Log in <img src={logIn} alt="logIn" />
                  </a>
                </span>
              </ul>
              <div
                style={{ zIndex: "1000" }}
                className={
                  navShow
                    ? "threeline d-lg-none cursor_pointer my-2"
                    : "threeline d-lg-none cursor_pointer my-2"
                }
                onClick={() => setNavShow(!navShow)}
              >
                <a href="#">
                  <div
                    className={navShow ? " falseline1" : "  threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline" : " threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline3 " : "threelinechild"}
                  ></div>
                </a>
              </div>
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "shownav" : " hidenav"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center min-vh-100 justify-content-center  list-unstyled gap-3  pt-3 transition">
                  <ul className="d-flex flex-column gap-3 gap-xl-5 ps-4 py-3 list-unstyled mb-0 align-items-center">
                    <span className="d-flex align-items-center">
                      <a
                        className="fw-semibold fs_xl text_green ps-2 d-inline-block"
                        href="#"
                      >
                        Financial Services
                      </a>
                    </span>
                    <span className="d-flex align-items-center">
                      <a
                        className="fw-semibold fs_xl text_green ps-2 d-inline-block"
                        href="#"
                      >
                        Real Estate
                      </a>
                    </span>
                  </ul>
                  <ul className="d-flex flex-column mb-0 gap-4">
                    <span className=" primary_btn">
                      <a className="fw-semibold text_green fs_xl" href="#">
                        Sign up
                      </a>
                    </span>
                    <span className="primary_btn_border">
                      <a className=" fw-semibold text_green" href="#">
                        Log in <img src={logIn} alt="go" />
                      </a>
                    </span>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav;
