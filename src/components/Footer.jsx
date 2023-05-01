import React from "react";
import footer_logo from "../assets/img/png/footer logo.png";
import arrowUp from "../assets/img/svg/up arrow.svg";
import footer_bg_img from "../assets/img/png/footer_bg_img.png";

function Footer() {
  return (
    <>
      <section className=" bg_DarkBlue rounded-4 py-5 mx-md-3  position-relative mt-5 mb-md-3">
        <img
          className=" position-absolute  footer_bg_img_position z_index_1"
          src={footer_bg_img}
          alt="footer_bg_img"
        />
        <section className="z_index_3 position-relative">
          <div className="container pt-4">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-md-6 px-lg-0">
                    <input
                      className="bg_primary outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_md text_greyLight"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="bg_primary outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_md text_greyLight mt-2"
                      type="text"
                      placeholder="Email"
                    />
                    <div className="d-flex justify-content-between gap-xl-2 gap-1 mt-2">
                      <a
                        className="w_50 fw-semibold fs_md services_btn px-1 px-sm-2 px-md-3 px-xl-4  py_13_custom rounded-1 white_space"
                        href="#"
                      >
                        {" "}
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />{" "}
                        </svg>
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />{" "}
                        </svg>
                        Financial Services
                      </a>
                      <a
                        className="w_50 fw-semibold fs_md services_btn px-xl-4 px-md-3 px-2 px-sm-2 px-lg-2 py_13_custom rounded-1 white_space"
                        href="#"
                      >
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />{" "}
                        </svg>
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />{" "}
                        </svg>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <textarea
                      className=" w-100 pt_10_custom pb-5 px-2 rounded-2 bg_primary outline_none fw-semibold fs_md text_greyLight mt-4 mt-md-0"
                      placeholder="Message.."
                    ></textarea>
                    <a
                      className=" py_13_custom_submit bg_green w-100 d-inline-block text-center fw-semibold mt-1 fs_md text-white rounded-1 submit_btn_hover border_transperent"
                      href="#"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-12">
                <div className=" ps-xl-5 ms-xl-4">
                  <h2 className=" fw-semibold fs_4xl text-white mt-4 mt-md-0">
                    Contact us
                  </h2>
                  <p className=" fw-normal fs_xl text_grey mt-4">
                    Our Predictive Analytics utilize a combination of
                    event-driven data, historical data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="before_line_footer pt-sm-5 mt-5 px-4 position-relative d-flex justify-content-center"></div>
        <footer>
          <div className="container">
            <div className="row pt-5 mt-4 justify-content-between">
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <a href="#">
                    <img
                      className=" mb-1"
                      src={footer_logo}
                      alt="footer_logo"
                    />
                  </a>
                  <a
                    className=" fw-semibold fs_md text-white mt-2 d-inline-block"
                    href="#"
                  >
                    info@catalyzeai.com <br /> (941) 867-1761
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row justify-content-between mt-4 mt-md-0">
                  <div className="col-6">
                    <p className=" fw-semibold fs_md text-white mb-0">
                      Financial Services
                    </p>
                    <div className=" d-flex flex-column">
                      <span className=" d-inline-block mt-3 mb-1">
                        <a
                          className=" fw-normal fs_md text-white footer_hover_link"
                          href="#"
                        >
                          Pricing
                        </a>
                      </span>
                      <span className=" d-inline-block mt-2 mb-1">
                        <a
                          className=" fw-normal fs_md text-white  footer_hover_link"
                          href="#"
                        >
                          Blog
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <p className=" fw-semibold fs_md text-white mb-0">
                      Real Estate
                    </p>
                    <div className=" d-flex flex-column">
                      <span className=" d-inline-block mt-3 mb-1">
                        <a
                          className=" fw-normal fs_md text-white footer_hover_link"
                          href="#"
                        >
                          Pricing
                        </a>
                      </span>
                      <span className=" d-inline-block mt-2 mb-1">
                        <a
                          className=" fw-normal fs_md text-white  footer_hover_link"
                          href="#"
                        >
                          Blog
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-between mt-4 mt-md-0">
                  <p className=" fw-semibold fs_md text-white mb-0">LinkedIn</p>
                  <img className=" mt-2" src={arrowUp} alt="arrowUp" />
                </div>
              </div>
            </div>
            <div className="row justify-content-between mt-md-4 pt-md-2">
              <div className="col-md-6">
                <div className="d-md-flex justify-content-between">
                  <p className=" mb-0 fw-normal fs_xsm text_grey">
                    All rights reserved.©20022 Catalyze AI
                  </p>
                  <a
                    className=" fw-normal fs_xsm text_grey me-4 after_link_line position-relative px-xl-3 d-inline-block mt-3 mt-md-0 last_link"
                    href="#"
                  >
                    Do not sell my data
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-md-flex mt-4 mt-md-0">
                  <a
                    className=" fw-normal fs_xsm text_grey me-md-4 after_link_line position-relative px-xl-3 last_link"
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    className=" fw-normal fs_xsm text_grey me-4 after_link_line position-relative px-xl-3 ms-5 ms-sm-4 last_link"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
