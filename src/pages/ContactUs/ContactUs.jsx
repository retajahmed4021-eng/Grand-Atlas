import React from "react";
import Hero from "../../components/Hero";
import contactimage from "../../assets/images/contactimage.png"
import email from "../../assets/icons/email.png"
import location2 from "../../assets/icons/location2.png"
import phone from "../../assets/icons/phone.png"
import phone2 from "../../assets/icons/phone2.png"
import contactsocial from "../../assets/images/contactsocial.png"

export default function ContactUs() {






  return( <>
   <section
        className="relative h-125 sm:h-186 w-full bg-cover bg-center mb-12 sm:mb-20"
        style={{ backgroundImage: `url(${contactimage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 z-2 flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
          <h1 className="font-playfair w-full max-w-175 whitespace-pre-line text-[30px] sm:text-[48px] font-bold leading-[1.3]">
           Connected Globally.
           <br/>
      Available Locally.
          </h1>

          <p className="text-[#CEC7C7] whitespace-pre-line mt-5 max-w-212.5 text-[13px] sm:text-[15px] leading-normal ">
          With experts positioned in the world's most influential markets, we are never more than a conversation away.
          <br/> Reach out to our team to experience a new standard of real estate advisory.
          </p>

        </div>

      </section>
<div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-9 gap-8 lg:gap-5">
   <div className="">
 <h2 className="text-xl sm:text-2xl font-semibold font-playfair pb-5">Contact Information</h2>
<div>
<p  className="text-base sm:text-xl text-[#847D7D] pb-8">Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.</p>
<p className="flex items-start text-[#8E1616] text-base sm:text-xl pb-4 gap-2"><img src={location2} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
<p className="flex items-start text-[#8E1616] text-base sm:text-xl pb-4 gap-2"><img src={email} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />Grand .Atlas.Support@gmail.com</p>
<p className="flex items-start text-[#8E1616] text-base sm:text-xl pb-4 gap-2"><img src={phone} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />01208667730</p>
<p className="flex items-start text-[#8E1616] text-base sm:text-xl pb-4 gap-2"><img src={phone2} className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />035987124</p>
  </div>
  <div className="flex flex-col mt-7">
   <h3 className="text-[#847D7D] font-playfair text-lg sm:text-xl">Follow us on social media</h3>
   <img src={contactsocial} className="w-40 sm:w-50 h-10 mt-4 flex gap-3 text-xs text-red-800"/>
  </div>
  <div>
   <h3 className="text-[#847D7D] font-playfair text-lg sm:text-xl mt-7 pb-3">Working Hours</h3>
   <p className="text-[#8E1616] text-base sm:text-xl pb-3">Saturday :  <span className="text-[#847D7D] text-base sm:text-xl">    9:00AM - 5:00 PM</span></p>
   <p className="text-[#8E1616] text-base sm:text-xl pb-3 ">Sunday :  <span className="text-[#847D7D] text-base sm:text-xl">    9:00AM - 5:00 PM</span></p>
   <p className="text-[#8E1616] text-base sm:text-xl pb-3">Monday :  <span className="text-[#847D7D] text-base sm:text-xl">    9:00AM - 5:00 PM</span></p>
   <p className="text-[#8E1616] text-base sm:text-xl pb-3">Tuesday :  <span className="text-[#847D7D] text-base sm:text-xl">    9:00AM - 5:00 PM</span></p>
   <p className="text-[#8E1616] text-base sm:text-xl pb-3">Wednesday :  <span className="text-[#847D7D] text-base sm:text-xl">    9:00AM - 5:00 PM</span></p>
  </div>
   </div>

   <div className="p-0 m-0">
      <div className="w-full m-0 shadow-lg rounded-xl p-4 sm:p-5 bg-[#FFFFFF] h-auto lg:h-180 border border-[#E2E2E2]">
          <h1 className='text-xl sm:text-2xl p-3 font-playfair mb-2 object-contain'>Send us a message</h1>
        <form>
         <label className="font-playfair text-base sm:text-lg mb-1">
            Name
          </label>

          <input
            type="text"
            name="name"
            className="w-full h-12 bg-[#F7F7F7] border border-[#D6D0D0] rounded-lg px-3 mb-6 outline-none focus:border-[#8E1616]"
          />


          <label className="font-playfair text-base sm:text-lg mb-1">
            Email
          </label>

          <input
            type="email"
            name="Email"
            className="w-full h-12 bg-[#F7F7F7] border border-[#D6D0D0] rounded-lg px-3 mb-6 outline-none focus:border-[#8E1616]"
          />

           <label className="font-playfair text-base sm:text-lg mb-1">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            className="w-full h-12 bg-[#F7F7F7] border border-[#D6D0D0] rounded-lg px-3 mb-6 outline-none focus:border-[#8E1616]"
          />


          <label className="font-playfair text-base sm:text-lg mb-1">
            Message
          </label>

          <textarea
            name="message"
            className="w-full h-30 bg-[#F7F7F7] border border-[#D6D0D0] rounded-lg p-3 mb-9 resize-none outline-none focus:border-[#8E1616]"
          />
          <button className='font-playfair w-full text-[#8E1616] border border-[#8E1616] rounded-xl h-14 sm:h-15 mt-2 transition duration-300 hover:bg-[#8E1616] hover:text-white'>Send Message </button>
        </form>
      </div>
      </div>
</div>
       </> );
}
