import React from "react";
import diamond from "../assets/img/svg/diamond.svg";
import block_img from "../assets/img/svg/block.svg";
import view_arrow from "../assets/img/svg/view arrow.svg";
import dollar from "../assets/img/svg/dollar.svg";
import percentage from "../assets/img/svg/percentage.svg";

function Platform() {
  return (
    <>
      <section className=" py-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <h2 className=" fw-semibold fs_4x5l mb-0 text_black">
                Our Platform
              </h2>
            </div>
            <div className="col-lg-9">
              <div className="row mt-4 mt-lg-0">
                <div className="col-md-6">
                  <div className="h-100 d-flex flex-column justify-content-between bg_gray py-md-5 py-4 px-md-5 px-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h3 className=" fw-semibold fs_xl mb-0 text_black">
                        Exclusive
                      </h3>
                      <img src={diamond} alt="diamond" />
                    </div>
                    <p className=" fw-normal fs_md mb-0 text_darkgrey  max_width_186 mt-5 pt-5">
                      200 exclusive prospects pushed to your platfrom monthly.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="h-100 d-flex flex-column justify-content-between bg_gray py-md-5 py-4 px-md-5 px-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h3 className=" fw-semibold fs_xl mb-0 text_black pe-md-5 me-md-5">
                        In your backyard
                      </h3>
                      <img
                        className=" ps-md-5"
                        src={block_img}
                        alt="block_img"
                      />
                    </div>
                    <p className=" fw-normal fs_md mb-0 text_darkgrey  mt-5 pt-5">
                      Radius based leads within 50-miles from you, prioritizing
                      those closer to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-4">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <div className="h-100 d-flex flex-column justify-content-between bg_gray py-md-5 py4 px-md-5 px-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h3 className=" fw-semibold fs_xl mb-0 text_black pe-md-5 me-md-5">
                        High net worth
                      </h3>
                      <img className=" ms-md-5" src={dollar} alt="dollar" />
                    </div>
                    <p className=" fw-normal fs_md mb-0 text_darkgrey  pe-5 mt-5 pt-5">
                      Average investable assets of $1.5 million.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <div className="h-100 d-flex flex-column justify-content-between bg_gray py-md-5 py-4 px-md-5 px-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h3 className=" fw-semibold fs_xl mb-0 text_black pe-md-5 me-md-5">
                        High propensity
                      </h3>
                      <img
                        className=" ps-md-5"
                        src={percentage}
                        alt="percentage"
                      />
                    </div>
                    <p className=" fw-normal fs_md mb-0 text_darkgrey  mt-5 pt-5">
                      Our combination of event-driven data, historical data,
                      behavioral analytics, and real-time data results in the
                      highest propensity prospects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-4 mt-md-0">
              <div className=" dollar_bg_img">
                <div className="d-flex flex-column justify-content-end h-100 pb-5 mb-5">
                  <div className="d-flex justify-content-between align-items-center px-4">
                    <a className=" text-white fw-semibold fs_md" href="#">
                      View pricing
                    </a>
                    <a href="#">
                      <img src={view_arrow} alt="view_arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Platform;
