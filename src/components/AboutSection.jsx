import React from "react";
import aboutimage from "../assets/images/aboutimage.png";
import arrow from "../assets/images/arrow.png";
import Title from "../components/Title";

export default function AboutSection() {
  return (
   <section className="mx-auto px-2 mb-20">
      <Title title="About Grand Atlas" cn="text-center mb-6" />

     <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-17.5 pt-8 lg:pt-16 px-3 sm:px-6 lg:px-9">
      <div className="h-80 sm:h-100 md:h-125 lg:h-171.75 overflow-hidden rounded-t-[15%] border-[5px] border-solid border-[#8E1616] w-full min-w-0 p-0">
  <img
    src={aboutimage}
    alt=""
    className="h-full w-full object-cover"
  />
</div>

        <div className="flex flex-col w-full min-w-0 h-auto">
          <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl h-auto leading-7 sm:leading-8 lg:leading-9 text-[#554E4E]">
            We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm. We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
          </p>

          <button className="lg:mt-30 flex w-full sm:w-47.5 items-center justify-center gap-3 rounded-md bg-linear-to-r from-[#8E1616] to-[#C94545] px-6 py-2.5 font-medium text-white transition hover:brightness-110">
            Know More
            <img src={arrow} className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
