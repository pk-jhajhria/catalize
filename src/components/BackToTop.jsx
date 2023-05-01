import React, { useState, useEffect } from "react";
import bt_button from "../assets/img/png/bt_button.png";

const BackToTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="me-2">
      <span
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-3 me-2 bg_gradient_btn p-0 py-3 px-1 rounded-5"
            : "btn d-none position-fixed end-0 bottom-0 mb-2 me-2 bg_gradient_btn"
        }
      >
        <img className=" w_25" src={bt_button} alt="bt_button" />
      </span>
    </div>
  );
};

export default BackToTop;
