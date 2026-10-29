import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/icons/Logo.png";
import Logo2 from "../assets/icons/Logo2.png"

export default function Register() {

  const navigate =useNavigate();


  return (
    <>
   
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[4%] bg-white">
        <div className="flex shrink-0 justify-between mx-0 sm:px-[4%]">
          <img src={Logo2} alt="Grand Atlas" className="w-10 h-10 sm:w-16 sm:mx-0 lg:w-20 lg:h-18 " />
         <div className="hidden sm:flex flex-col">
           <h1 className="font-playfair text-lg sm:text-xl lg:text-3xl mt-3 font-bold text-[#8E1616]">GRAND ATLAS</h1>
          <p className="text-[#D7C4AA] text-[12px] sm:text-xs px-3 font-playfair ">LUXURY REAL ESTATE</p>
         </div>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-2 sm:gap-4 lg:gap-10 text-[#847D7D] text-xs sm:text-base lg:text-lg  whitespace-nowrap">
            <Link to="/">
              <li className=" ">Home</li>
            </Link>
            <Link to="/units">
              <li className=" ">Units</li>
            </Link>
            <Link to="/zones">
              <li className=" ">Zones</li>
            </Link>
            <Link to="/developer">
              <li className="">Developers</li>
            </Link>
            <Link to="/ContactUs">
              <li className=" ">Contact Us</li>
            </Link>
          </ul>
        </div>
        <button
         onClick={() => navigate(`/register`)}
         className="shrink-0 rounded-md bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white  transition hover:brightness-110  px-2 py-1 sm:px-6 sm:py-2 lg:px-6 text-xs sm:text-sm lg:text-base">
          Register
        </button>
      </nav>
    </>
  );
}
