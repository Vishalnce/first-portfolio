import React from 'react';
import { navLinks } from '../../Constants';
import { HashLink as Link } from "react-router-hash-link";





function DropDown() {
  return (
    <div className="relative">
      <div className='backdrop-blur-sm w-[85%] mx-auto flex justify-center items-center z-10 absolute top-0 left-1/2 transform -translate-x-1/2 '>
        <ul className='flex flex-col items-center gap-4'>
          {navLinks.map((items) => (
            <li key={items.label}>
              <Link to ={`#${items.linked}`} className='text-2xl text-white font-serif '>
                {items.label}
              </Link>
            </li>
          ))}
        </ul>
      </div> 
    </div> 
  );
}

export default DropDown;
