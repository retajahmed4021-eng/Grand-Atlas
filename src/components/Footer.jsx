
import React from "react";
import Logo from "../assets/icons/Logo.png"
import SocialLinks from "../assets/images/SocialLinks.png"
import arrow from "../assets/images/arrow.png"

export default function Footer() {
  return(

<footer className="mt-16 w-full bg-[#fafafa] px-4 py-10">
  <div className="mx-auto max-w-6xl">

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

   
      <div>
        <img src={Logo} alt="grandatlas"/>
        <p className="mt-2 text-xs text-gray-600">
          +1 (763) 547-1297
        </p>

        <p className="mt-2 text-xs text-gray-600">
          support@lift.agency
        </p>
      </div>

      
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Quick Links
        </h3>

        <ul className="space-y-2 text-xs text-gray-500">
          <li><a href="#" className="hover:text-[#8E1616]">Home</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Inventories</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Zones</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Developers</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Contact Us</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          About
        </h3>

        <ul className="space-y-2 text-xs text-gray-500">
          <li><a href="#" className="hover:text-[#8E1616] ">Grand Atlas</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Legal</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Help</a></li>
          <li><a href="#" className="hover:text-[#8E1616]">Support</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Get In Touch
        </h3>

        <form
          
          className="flex w-62 h-11.5 overflow-hidden rounded-md border border-[#8E1616] "
        >
          <input
            type="email"
            placeholder="Get product updates"
            className="min-w-0 flex-1 px-2 py-2 text-xs outline-none"
          />

          <button
            type="submit"
            className="bg-red-800 px-3 text-white transition hover:bg-red-900 w-13
            h-12.5"
            aria-label="Subscribe"
          >
            <img src={arrow} className="w-6 px-1"/>
          </button>
        </form>

        <div className="mt-4 flex gap-3 text-xs text-red-800">
         <img src={SocialLinks}/>
        </div>
      </div>

    </div>

    <div className="mt-8 border-t border-gray-200 pt-5 text-center">
      <p className="text-xs text-gray-600">
        © 2020 Lift Media. All rights reserved
      </p>
    </div>

  </div>
</footer>
) 
;
}
