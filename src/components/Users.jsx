import React, { useRef } from "react";
import left_arrow from "../assets/img/svg/left-arrow.svg";
import right_arrow from "../assets/img/svg/right-arrow.svg";
import img_99 from "../assets/img/svg/99 coma.png";
import users_green_shadow from "../assets/img/png/users green shadow.png";
import Slider from "react-slick";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

function Users() {
  const Btns = useRef();

  const settings = {
    dots: FOCUSABLE_SELECTOR,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      ,
    ],
  };

  return (
    <>
      <section className=" position-relative py-md-5">
        <img
          className=" position-absolute top-0 users_green_shadow_position z_index_1 d-none d-md-block"
          src={users_green_shadow}
          alt="users_green_shadow"
        />
        <div className="container z_index_4 position-relative">
          <div className="d-flex justify-content-between">
            <img
              className="cursor_pointer"
              onClick={() => Btns.current.slickPrev()}
              src={left_arrow}
              alt="left_arrow"
            />
            <h2 className=" fw-sem ibold fs_4x5l text_black mb-0">
              See what our users say{" "}
            </h2>
            <img
              className="cursor_pointer"
              onClick={() => Btns.current.slickNext()}
              src={right_arrow}
              alt="right_arrow"
            />
          </div>
          <Slider ref={Btns} className="mt-sm-5 mt-4" {...settings}>
            <div>
              <div className="mx-2 py-5 px-4 rounded-2 bg-white h-100 d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p className="fw-semibold fs_md text_green Rc_circle rounded-circle bg_green mb-0">
                      RC
                    </p>
                    <span className=" ms-4">
                      <p className=" fw-semibold fs_lg text_black mb-0">
                        Richard Chung
                      </p>
                      <p className=" fw-normal fs_xsm text_lightbrown mb-0">
                        Killer Williams
                      </p>
                    </span>
                  </div>
                  <img className="d-sm-none" src={img_99} alt="img_99" />
                </div>
                <p className=" mt-4 pt-2 fw-normal fs_md mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The 'Content here, content here', making it look like readable
                  English.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-2 py-5 px-4 rounded-2 bg-white h-100 d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p className="fw-semibold fs_md text_green Rc_circle rounded-circle bg_green mb-0">
                      PM
                    </p>
                    <span className=" ms-4">
                      <p className=" fw-semibold fs_lg text_black mb-0">
                        Paul Morris
                      </p>
                      <p className=" fw-normal fs_xsm text_lightbrown mb-0">
                        CEO of KW Forward Living KW Regianal Owner
                      </p>
                    </span>
                  </div>
                  <img className="d-sm-none" src={img_99} alt="img_99" />
                </div>
                <p className=" mt-4 pt-2 fw-normal fs_md mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The 'Content here, content here', making it look like readable
                  English.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-2 py-5 px-4 rounded-2 bg-white h-100 d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <p className="fw-semibold fs_md text_green Rc_circle rounded-circle bg_green mb-0">
                      RC
                    </p>
                    <span className=" ms-4">
                      <p className=" fw-semibold fs_lg text_black mb-0">
                        Richard Chung
                      </p>
                      <p className=" fw-normal fs_xsm text_lightbrown mb-0">
                        Killer Williams
                      </p>
                    </span>
                  </div>
                  <img className="d-sm-none" src={img_99} alt="img_99" />
                </div>
                <p className=" mt-4 pt-2 fw-normal fs_md mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The 'Content here, content here', making it look like readable
                  English.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Users;
