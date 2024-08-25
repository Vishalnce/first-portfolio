import React from "react";
import coming_soon from "../../images/coming_soon.mp4";

function comingSoon() {
  return (
    <>
      <div className=" w-[40%] h-[40%] md:w-[30%]  m-8  ">
        <video className="w-full h-full" autoPlay muted loop>
          <source src={coming_soon} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default comingSoon;
