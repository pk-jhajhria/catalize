import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import started from "../assets/img/webp/started-img.webp";
import started2 from "../assets/img/webp/started2.webp";
import started3 from "../assets/img/webp/started3.webp";
import started4 from "../assets/img/webp/started4.webp";

function Accordian() {
  const [activeTab, setActiveTab] = useState("tow");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className=" py-5 mx-3">
        <div className=" bg_color py-5 h_1  ">
          <div className="container  ">
            {" "}
            <div className=" text-center pb-4">
              {" "}
              <h2 className=" ff_Seoge fw-semibold fs_4x5l text-white">
                How to get started?
              </h2>
            </div>{" "}
            <div class="content-placeholder">
              <div className="row align-items-center line position-relative ">
                <div className="col-lg-6">
                  <Accordion defaultActiveKey={["1"]}>
                    <Accordion.Item
                      eventKey="0"
                      className={
                        activeTab === "one rounded-3" ? "Active " : "my-4"
                      }
                      onClick={() => handleTabClick("one")}
                    >
                      <Accordion.Header>
                        <p className=" ff_Seoge fw-semibold fs_2x4l text-white">
                          Provide your information
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" ff_Seoge fw-normal fs_md text-white opacity_07">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="1"
                      className={activeTab === "tow" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("tow")}
                    >
                      <Accordion.Header>
                        <p className=" ff_Seoge fw-semibold fs_2x4l text-white">
                          Select your location
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" ff_Seoge fw-normal fs_md text-white opacity_07">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className={activeTab === "three" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("three")}
                      y
                      eventKey="2"
                    >
                      <Accordion.Header>
                        <p className=" ff_Seoge fw-semibold fs_2x4l text-white">
                          Purchase your subscription
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" ff_Seoge fw-normal fs_md text-white opacity_07">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      className={activeTab === "four" ? " Active" : "my-4 "}
                      onClick={() => handleTabClick("four")}
                      y
                      eventKey="3"
                    >
                      <Accordion.Header>
                        <p className=" ff_Seoge fw-semibold fs_2x4l text-white">
                          Access your dashboard
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className=" ff_Seoge fw-normal fs_md text-white opacity_07">
                          Provide a zip code and we will provide you with the
                          highest propensity prospects in a 50 mile radius.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  {activeTab === "one" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={started}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "tow" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={started2}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "three" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={started3}
                        alt="img"
                      />
                    </span>
                  )}
                  {activeTab === "four" && (
                    <span className="img_wh">
                      <img
                        className=" w-100 my-4 my-lg-0"
                        src={started4}
                        alt="img"
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordian;
