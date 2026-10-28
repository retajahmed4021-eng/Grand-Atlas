import React from 'react'

export default function NavbarDetails() {
  return (
    <div className="flex  justify-center pt-24 ">
      <div className=" w-full max-w-md shadow-lg rounded-xl p-5 m-2  bg-[#f7f7f7]">
          <h1 className='font-bold text-3xl p-3 text-center mb-2 text-[#8E1616]'>Creat Account</h1>
        <form>
       <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-[#847D7D] p-3 rounded-lg mb-4"
          />
          
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg mb-4 border-[#847D7D]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4 border-[#847D7D]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg mb-4 border-[#847D7D]"
          />
          <button className='w-full text-[#8E1616] border border-[#8E1616] rounded-xl h-15 mt-2 transition duration-300 hover:bg-[#8E1616] hover:text-white'>Submit </button>
        </form>
      </div>
      </div>
  )
}
