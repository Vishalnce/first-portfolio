import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function address() {
  return (
    <>
      <div className=" w-[35%] max-md:w-[82%] h-[75%] m-6">
        <div className="m-7 text-white text-3xl">Get in touch</div>
        <div className="m-7 text-[#d9dcdd] font-serif">
          Hey Folks, Let's connect! Send me a message using the form below or
          reach out via email or social media. I'm looking forward to hearing
          from you
        </div>

        <div className="m-7 text-white text-3xl">My Address</div>

        <div className="m-7 flex items-center text-[#d9dcdd] font-serif">
          <span>
            {" "}
            <FaMapMarkerAlt />{" "}
          </span>
          <span className="ml-2 text-lg">Hyderabad, Andhra Pradesh, India</span>
        </div>

        <div className="m-7 flex items-center text-[#d9dcdd] font-serif">
          <span>
            {" "}
            <FaMobileAlt />{" "}
          </span>
          <span className="ml-2 text-lg">+91 97098 61776</span>
        </div>
        <div className="m-7 flex items-center text-[#d9dcdd] font-serif">
          <span>
            {" "}
            <MdOutlineMail />{" "}
          </span>
          <span className="ml-2 text-lg ">Hyderabad, Andhra Pradesh, India</span>
        </div>
      </div>
    </>
  );
}

export default address;
