import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowResize";
import logo from './../../assets/img/logo.png'
import psms from '../../assets/img/psms.png'




function Navbar() {
  const size = useWindowSize() 
  console.log(size)
  return (
    <div className="header">
    
      <nav class="nav flex flex-wrap items-center justify-between px-4 container  sticky top-0 z-50">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
         <img
            className="h-14 w-auto" 
            src={ psms}
            alt="Your Company"
         />
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
  <label class="menu-icon block cursor-pointer lg:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
  <li className="px-4 py-3"> 
               <a href="/" className="active font-[600]" >Home</a>
           </li>
           <li className="px-4 py-3"> 
               <a href="#about" className=" font-[600]">About Us</a>
           </li>
           <li className="px-4 py-3"> 
               <a href="#projects" className=" font-[600]">Projects</a>
           </li>
           <li className="px-4 py-3"> 
               <a href="#investment-portfolio" className=" font-[600]">Investments</a>
           </li>
           <li className="px-4 py-3"> 
               <a href="#contact" className=" font-[600]">Contact</a>
           </li>
           <li className="py-2 px-3">
              <a href="#_" class="rounded relative d-inline-flex group items-center justify-center px-3.5 py-2 
                  cursor-pointer  border-2 active:border-[#6eccaf] active:shadow-none shadow-lg  border-[#6eccaf] text-[#6eccaf]">
                  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <span class="relative d-flex font-[600]"> Login </span>
              </a>
           </li>
           <li className="py-2 px-2 ">
             <a href="#_" class="rounded relative d-inline-flex group items-center justify-center px-3.5 py-2 
                cursor-pointer border-b-4 border-l-2 active:border-[6eccaf] active:shadow-none shadow-lg bg-gradient-to-tr from-[#6eccaf] to-[#86ddc1] border-[#58e3b7] text-white">
                  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <span class="relative d-flex font-[600]"> Sign up </span>
             </a>
           </li>
  </ul>
</nav> 
    </div>
  );
}

export default Navbar;