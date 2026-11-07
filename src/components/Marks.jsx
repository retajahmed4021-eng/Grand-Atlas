
import React from "react";
import Title from "./Title";
import apartment from "../assets/icons/apartment.png";
import streamline from "../assets/icons/streamline.png";
import smileface from "../assets/icons/smileface.png";
import star from "../assets/icons/star.png";

const benchmarks = [
  {
    icon: <img className="w-12 h-12 p-2 object-contain" src={apartment} alt="Apartment" />,
    title: "48",
    description: "Properties Managed",
  },
  {
    icon: <img className="w-12 h-12 p-2 object-contain" src={streamline} alt="Investments" />,
    title: "90M",
    description: "Total Managed Investments",
  },
  {
    icon: <img className="w-12 h-12 p-2 object-contain" src={smileface} alt="Happy Clients" />,
    title: "500",
    description: "Happy Clients",
  },
  {
    icon: <img className="w-12 h-12 p-2 object-contain" src={star} alt="Satisfaction" />,
    title: "99%",
    description: "Client Satisfaction",
  },
];

export default function Marks() {
  return (
    <section className="mx-auto mb-16 w-full">
      <Title title="Benchmarks of Success" cn="text-center" />

      <div className="grid grid-cols-2 gap-4 px-5 py-6 md:grid-cols-4 md:gap-5 md:px-8">
        {benchmarks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center
            rounded-md border border-gray-200 bg-white
            text-center shadow-sm
            transition duration-300 hover:-translate-y-1 hover:shadow-md
            py-5 px-3"
          >
            <span className="mb-2">{item.icon}</span>

            <h3 className="mb-1 text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm md:text-base leading-5 text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
