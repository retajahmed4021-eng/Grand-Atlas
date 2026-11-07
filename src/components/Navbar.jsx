
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/icons/Logo.png";
import Logo2 from "../assets/icons/Logo2.png"

export default function Register() {

  const navigate =useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
  
   
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[4%] bg-white">
        <div className="flex shrink-0 justify-between mx-0 sm:px-[4%]">
          <img src={Logo2} alt="Grand Atlas" className="w-9 h-9 sm:w-12 sm:mx-0 lg:w-14 lg:h-14 " />
         <div className="hidden sm:flex flex-col">
           <h1 className="font-playfair text-sm sm:text-base lg:text-lg mt-2 font-bold text-[#8E1616]">GRAND ATLAS</h1>
          <p className="text-[#D7C4AA] text-[10px] sm:text-[11px] px-2 font-playfair ">LUXURY REAL ESTATE</p>
         </div>
        </div>
        <div className="flex-1 hidden sm:flex justify-center">
          <ul className="flex justify-center text-center gap-2 sm:gap-4 lg:gap-7 text-[#847D7D] text-[11px] sm:text-sm lg:text-base whitespace-nowrap ">
            <Link to="/">
              <li className=" hover:text-[#8E1616] hover:underline decoration-[#8E1616]">Home</li>
            </Link>
            <Link to="/units">
              <li className="hover:text-[#8E1616] hover:underline decoration-[#8E1616]">Units</li>
            </Link>
            <Link to="/zones">
              <li className=" hover:text-[#8E1616] hover:underline decoration-[#8E1616]">Zones</li>
            </Link>
            <Link to="/developer">
              <li className="hover:text-[#8E1616] hover:underline decoration-[#8E1616]">Developers</li>
            </Link>
            <Link to="/ContactUs">
              <li className="hover:text-[#8E1616] hover:underline decoration-[#8E1616]">Contact Us</li>
            </Link>
          </ul>
        </div>
        <button
         onClick={() => navigate(`/register`)}
        className="hidden sm:block shrink-0 rounded-md bg-linear-to-r from-[#8E1616] to-[#C34B4B] text-white transition hover:brightness-110 px-3 py-1.5 sm:px-5 sm:py-2 lg:px-5 text-xs sm:text-sm lg:text-sm">
          Register
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden ml-3 text-2xl text-[#8E1616]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-5 text-sm text-[#847D7D] sm:hidden">
    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/units" onClick={() => setMenuOpen(false)}>Units</Link>
    <Link to="/zones" onClick={() => setMenuOpen(false)}>Zones</Link>
    <Link to="/developer" onClick={() => setMenuOpen(false)}>Developers</Link>
    <Link to="/ContactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link>
    <Link to="/register" onClick={() => setMenuOpen(false)} className="text-[#8E1616] font-semibold">Register</Link>
  </div>
)}

      </nav>
  
  );
}
