
import React from "react";
import Title from "./Title";

import futureimage1 from "../assets/images/futureimage1.png";
import futureimage2 from "../assets/images/futureimage2.png";
import futureicon1 from "../assets/icons/futureicon1.png"


import SliderImport from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ?? SliderImport;

export default function FutureLandmarks() {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
  };
const properties=[
{
image:futureimage1,
title:"PALM HILLS",
desc:"Developments"
},
{
image:futureimage2,
title:"Hayah City",
desc:"Hayah Development",
icon:futureicon1,
},
{
image:futureimage1,
title:"PALM HILLS",
desc:"Developments"
},
{
image:futureimage1,
title:"PALM HILLS",
desc:"Developments"
},
{
image:futureimage2,
title:"Hayah City",
desc:"Hayah Development",
icon:futureicon1,
},
{
image:futureimage1,
title:"PALM HILLS",
desc:"Developments"
},
]

  return(
    <section className="w-full py-12 px-4 sm:px-6 lg:px-9 overflow-hidden mb-20">
          <Title title="Future Landmarks" cn="text-center mb-6" />

          <div className="w-full mx-auto px-2 ">
            <Slider {...settings}>
              {properties.map((property, index) => (
                    <div key={index} className="px-1.5">
                      <div className="w-full">
                    <div className="w-full overflow-hidden rounded-2xl border-2 border-solid p-3.25 border-[#EAEAEA] shadow-lg">
                        <img
                        src={property.image}
                        alt={property.title}
                        className="w-full object-cover shadow-lg rounded-2xl"
                      />
                      <div className="flex mt-5 gap-3">
                         <img src={property.icon} className="object-cover w-9.25 h-10.25"/>
                         <div className="min-w-0">
                       <h3 className="flex text-lg sm:text-xl lg:text-2xl font-semibold text-black ">

                      {property.title}
                    </h3>
                    <p className="text-sm sm:text-base font-light text-gray">
                      {property.desc}
                    </p>
                    </div>
                    </div>
                    <button className="w-full sm:w-auto text-[#8E1616] transition duration-300 hover:bg-[#8E1616] hover:text-[white] border border-[#8E1616] rounded-xl px-4 sm:px-10 lg:px-40.75 py-2 text-center items-center mt-6 lg:mt-10">View Details</button>
                  </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
  );

}
