import React, { useEffect, useState } from "react";
function Loader() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }, []);
  {
    if (loader === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <section className="pre_loader position-fixed w-100 min-vh-100 Loader d-flex flex-column justify-content-center align-items-center position-relative ">
          <div className=" Overlay_loader position-absolute w-100 h-100 z_index0 "></div>
          <div className="d-flex flex-row align-items-center fontsize_loader gap-2  gap-sm-3 z_index1">
            <div id="preloader">
              <div id="loader"></div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
