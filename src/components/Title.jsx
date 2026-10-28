import React from "react";

export default function Title({ title, cn = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${cn}`}>
      <h2 className="font-playfair text-3xl font-semibold text-center mt-10.5 mb-1">
        {title}
      </h2>

      <div className="h-1 w-25 rounded-full bg-[#C94545] mb-12"></div>
    </div>
  );
}
