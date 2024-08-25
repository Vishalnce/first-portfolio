import React from "react";
import logo from "../images/logo.jpeg";
import { navLinks } from "../Constants/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DropDown from "./Drop/DropDown.jsx";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { HashLink as Link } from "react-router-hash-link";
//  import { Link as  } from 'react-router-dom'

function Header() {
  const [dropmenu, setdropmenu] = useState(false);

  return (
    <div
      id="home"
      className="bg-custom-bg bg-cover bg-center max-sm:h-[28rem] h-[38rem] py-5 w-full"
    >
      <nav className=" flex justify-between items-center">
        <Link to="#home">
          <img src={logo} className="h-[3rem] mx-5 " />
        </Link>

        <ul className=" flex flex-1 justify-center items-center gap-8 max-lg:hidden m-[30px] pr-[83px]">
          {navLinks.map((items) => (
            <li key={items.label}>
              <Link to={`#${items.linked}`} className="text-2xl text-white font-serif hover:text-gray-400 transition duration-500 ease-in-out">
                {items.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link onClick={() => setdropmenu((prevState) => !prevState)}>
          <FontAwesomeIcon
            icon={faBars}
            className="m-4 h-7 w-10 text-white hidden max-lg:block text-right"
          />
        </Link>
      </nav>

      {dropmenu ? <DropDown /> : null}

      <div className="flex justify-center max-md:text-[3rem]  text-[6rem]  max-sm:mt-14 mt-5  text-white font-serif">
        Vishal Bharti
      </div>

      <div className="flex justify-center max-sm:mt-2 text-[5rem] mt-3 gap-2 text-white">
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
  );
}

export default Header;
