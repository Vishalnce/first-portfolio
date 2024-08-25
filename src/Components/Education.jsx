import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa";
import styles from "./Education.module.css";
import { educationInfo } from "../Constants/index.js";

function Education() {
  return (
    <div id = "education" className="  bg-white w-full">
      {/* header of the section */}
      <div className="flex flex-1 flex-row justify-center items-center mt-[4rem] mb-7 gap-3  ">
        <FaBriefcase className="h-[4rem] w-[9rem] max-md:w-[6rem] max-md:h-[3rem] text-[#2857A4]" />
        <span className="text-[3rem] max-md:text-[2rem] font-bold text-[#2857A4] font-serif ">EDUCATION</span>
      </div>

      {/* body of section */}

      <div className="w-[80%] h-auto mx-auto   relative ">
        {/* education container */}
        {/* timeline box */}

        {educationInfo.map((items) => (
          
          <div
          key = {items.id}
            className={` ${styles.timelineBox} relative    left-0  h-auto`}
          >
            {/* logo */}

            <div className=" grid grid-cols-4 ">
              <img src={items.logo} className="w-16 inline-block" />

              <div className="col-span-3  text-right text-[#1842BF] font-serif font-bold">
                <span className="block ">{items.heading1} </span>
                <span className="block ">{items.heading2}</span>
              </div>
            </div>

            <div className=" text-[#b5abab]  text-justify m-4">
              <span>{items.description}</span>
            </div>

            {/* content */}
            <div></div>
          </div>
        ))}

        {/* airplane divider  */}

        <div className={styles.timelineDivider}>
          <div className={styles.timelineTraveller}>
            <FaPlane className=" text-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
