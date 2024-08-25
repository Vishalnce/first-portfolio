import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Card from "./Cards/Cards";

import {skillsInfo} from "../Constants/index.js";


function Skills() {
  return (


    <div id="skills" className=" bg-[#EFEFEF] w-full  ">

      
      <div className="flex flex-1 flex-row justify-center items-center mt-[6rem] mb-7 gap-3 pt-[60px] ">
        <FaChalkboardTeacher className="h-[4rem] w-[9rem] max-md:w-[6rem] max-md:h-[4rem] text-[#2857A4]" />
        <span className="text-[3rem] font-bold text-[#2857A4] font-serif ">SKILLS</span>
      </div>

      {/*  container  */}

      <div className=" flex justify-center">
        {/* {cards container } */}
        <div className=" flex flex-wrap max-sm:flex-col justify-around  h-auto w-[80%]  m-6 ">
          {/* invidual cards */}
          
          {skillsInfo.map((items) => (
            <Card 
            key={items.id}
            dynamicTitle={items.dynamicTitle}
            dynamicColour = {items.titleColour}
            dynamicParagraph={items.dynamicParagraph}
            dynamicBgColor={items.dynamicBgColor}
            dynamicWidth={items.dynamicWidth}
            Icon={items.Icon}
            />
          ))}

          
          


        </div>
      </div>
    </div>

  );
}

export default Skills;
