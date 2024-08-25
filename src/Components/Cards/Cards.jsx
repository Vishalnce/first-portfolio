import React from "react";
import { TbLetterC } from "react-icons/tb";

function Card({
  dynamicTitle,
  dynamicColour,
  dynamicParagraph,
  dynamicBgColor,
  dynamicWidth,
  Icon,
}) {


  const widthNumber = Number(dynamicWidth);


 

  
  return (
    <div>
      <div className="bg-white max-sm:w-auto w-[14rem] h-[18rem] rounded-3xl flex flex-col justify-center items-center m-7">

        <div className="flex items-center">
        <Icon 
        className="w-[40px] h-[48px] " 
        style={{ color: dynamicColour }}
        />

        {Icon === TbLetterC && <span className=" text-[#005697] text-[1rem] font-bold">++</span>}

        </div >
        
        
        

        

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[2rem] font-bold font-serif">{dynamicTitle}</h1>
          <p className="text-[1rem] text-center">{dynamicParagraph}</p>
        </div>

        <div className="h-8 w-32 bg-[#c5c4c4] mt-6 rounded-2xl">
          <div
            className='h-8 rounded-l-2xl' 
            style={{ width: `${widthNumber}%` ,
                backgroundColor: dynamicBgColor
            }}
          >

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
