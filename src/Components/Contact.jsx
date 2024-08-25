import React from "react";
import { FaAddressBook } from "react-icons/fa";

import Form from "./ContactForm/Form";
import Address from "./Address/AddressInfo";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { HashLink as Link } from "react-router-hash-link";
import { TbSquareRoundedArrowUp } from "react-icons/tb";

function Contact() {
  return (
    <>
      <div id="contact" className="bg-custom-gradient relative">
        <div className="flex  justify-center items-center  pt-10   ">
          <FaAddressBook className="h-[4rem] w-[9rem] max-md:w-[6rem] max-md:h-[3rem] text-[#ffffff]" />
          <span className="text-[3rem] max-md:text-[2rem] font-bold text-[#ffffff] font-serif ">
            CONTACT
          </span>
        </div>

         {/* contact body */}

        <div className=" flex max-md:flex-col justify-center items-center w-full h-auto mx-auto  ">
          {/* adddress */}
          <Address />

          {/* Form */}
          <Form />
        </div>

        <Link to = "#home">
        <TbSquareRoundedArrowUp className="absolute left-[90%] top-[75%] max-md:top-[88%] max-md:left-[85%] text-gray-400 text-[300%] "></TbSquareRoundedArrowUp>
        </Link>

        <div className="flex justify-center max-sm:mt-2 text-[5rem] mt-3 gap-2 text-white max-md:text-[4rem]">
          <Link
            to="https://github.com/Vishalnce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="p-3 rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/vishal-bharti-306b53278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="p-3 rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500" />
          </Link>

          <Link
            to="https://www.instagram.com/__vish__44/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="p-3 rounded-full transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-600" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
