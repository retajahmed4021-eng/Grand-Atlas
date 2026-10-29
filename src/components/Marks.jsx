import React from "react";
import Title from "./Title";
import apartment from "../assets/icons/apartment.png";
import streamline from "../assets/icons/streamline.png";
import smileface from "../assets/icons/smileface.png";
import star from "../assets/icons/star.png";

const benchmarks = [
  {
    icon: <img className="size-15 p-2" src={apartment} alt="instagram" />,
    title: "48",
    description: "Properties Managed",
  },
  {
    icon: <img className="size-15 p-2" src={streamline} alt="instagram" />,
    title: "90M",
    description: "Total Managed Investments",
  },
  {
    icon: <img className="size-15 p-2" src={smileface} alt="instagram" />,
    title: "500",
    description: "Happy Clients",
  },
  {
    icon: <img className="size-13 p-2" src={star} alt="instagram" />,
    title: "99%",
    description: "Client Satisfaction",
  },
];

export default function Marks() {
  return (
    <section className="mx-auto w-full mb-20 ">
      <Title title="Benchmarks of Success" cn="text-center" />

      <div className="grid grid-cols-2 gap-5.5 md:grid-cols-4 p-9">
        {benchmarks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center
            rounded-md border border-gray-200 bg-white
             text-center shadow-sm
            transition duration-300 hover:-translate-y-1 hover:shadow-md 
            py-3.75"
          >
            <span className="mb-1 text-2xl">{item.icon}</span>

            <h3 className="mb-1 text-2xl font-semibold text-gray-800 font-blod">
              {item.title}
            </h3>

            <p className="text-base leading-5 text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
