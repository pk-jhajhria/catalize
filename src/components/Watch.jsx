import React, { useState } from "react";
import playbtn from "../assets/img/svg/play-btn.svg";
import pause from "../assets/img/png/pause.png";
// import overclip from "../assets/img/png/video.png";

import { useRef } from "react";
function Watch() {
  const myBtn = useRef(null);
  const clip = (control) => {
    if (control === "play") {
      myBtn.current.play();
    } else if (control === "pause") {
      myBtn.current.pause();
    }
  };
  const [play, setplay] = useState(0);

  return (
    <>
      <section id="Watch" className="mb-5">
        <div className="container">
          <div className="my-5 py-5 position-relative">
            <div className="blue-shadow1 position-absolute"></div>
            <div className="green-shadow1 position-absolute"></div>
            <div
              style={{ zIndex: "1212312" }}
              className="clip_size mb-5 mx-auto position-relative"
            >
              <div className="thumbnail"></div>

              <div
                className=" d-flex flex-column justify-content-center align-items-center h-100 gap-5 position-relative "
                style={{ zIndex: "2" }}
              >
                <h2 className=" fs_4x9l ff_Seoge fw-semibold text-white">
                  Watch a demo
                </h2>
                <div className="clip_over">
                  {play ? (
                    <span
                      className=" position-relative"
                      onClick={() => {
                        clip("pause");
                        setplay(!play);
                      }}
                    >
                      <img className="p" src={pause} alt="img" />
                    </span>
                  ) : (
                    <span
                      className=" position-relative"
                      onClick={() => {
                        clip("play");
                        setplay(!play);
                      }}
                    >
                      <img className="Playbtn" src={playbtn} alt="img" />
                    </span>
                  )}
                  {/* <ReactPlayer light={true} url={overclip} playing /> */}
                  <iframe
                    className="position_relative"
                    width="946"
                    height="472"
                    src="https://www.youtube.com/embed/LXb3EKWsInQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <p className=" fs_lg ff_Seoge fw-semibold text-white">
                  Catalyze AI is a predictive analytics business development
                  platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Watch;
