import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import coming_soon from "../images/coming_soon.mp4";

import ComingSoon from "./PortfolioComingSoon/ComingSoon";

function Profolio() {
  return (
    <div className="bg-[#EFEFEF] " id ="portfolio">
      <div className="flex flex-1 flex-row justify-center items-center mt-[4rem] mb-7 gap-3 p-8 ">
        <FaBriefcase className="h-[4rem] w-[9rem] max-md:w-[6rem] max-md:h-[3rem] text-[#2857A4]" />
        <span className="text-[3rem] max-md:text-[2rem] font-bold text-[#2857A4] font-serif ">PORTFOLIO</span>
      </div>

      <div className="w-[80%] h-auto flex flex-wrap justify-between items-center max-md:flex-col mx-auto ">
        <ComingSoon />
        <ComingSoon />
        <ComingSoon />
        <ComingSoon />
      </div>
    </div>
  );
}

export default Profolio;
