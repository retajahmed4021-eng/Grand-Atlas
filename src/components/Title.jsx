import React from "react";

export default function Title({ title, cn = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${cn}`}>
      <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-center mt-8 mb-1">
        {title}
      </h2>

      <div className="h-1 w-20 sm:w-22 lg:w-25 rounded-full bg-[#C94545] mb-10"></div>
    </div>
  );
}

