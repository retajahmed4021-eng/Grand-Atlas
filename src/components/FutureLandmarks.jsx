
import React from "react";
import Title from "./Title";

import futureimage1 from "../assets/images/futureimage1.png";
import futureimage2 from "../assets/images/futureimage2.png";
import futureicon1 from "../assets/icons/futureicon1.png"
import futureicon2 from "../assets/icons/futureicon2.png"


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
desc:"Developments",
icon:futureicon2,
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
desc:"Developments",
icon:futureicon2,
},
{
image:futureimage1,
title:"PALM HILLS",
desc:"Developments",
icon:futureicon2,
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
desc:"Developments",
icon:futureicon2,
},
]

  return(
    <section className="w-full py-10 px-0 sm:px-6 lg:px-9 overflow-hidden mb-16">
          <Title title="Future Landmarks" cn="text-center mb-6" />

          <div className="w-full mx-auto px-0 sm:p-1 lg:p-2 ">
            <Slider {...settings}>
              {properties.map((property, index) => (
                    <div key={index} className="px-1.5 text-center">
                      <div className="w-full">
                    <div className="w-full overflow-hidden rounded-2xl border-2 border-solid p-2 sm:p-2 lg:p-3 border-[#EAEAEA] shadow-lg">
                        <img
                        src={property.image}
                        alt={property.title}
                        className="w-full object-cover shadow-lg rounded-xl h-32 sm:h-48 lg:h-56"
                      />
                      <div className="flex mt-4 gap-2 sm:gap-2 lg:gap-3">
                         <img src={property.icon} className="object-contain w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>
                         <div className="min-w-0">
                       <h3 className="flex text-sm sm:text-base lg:text-lg font-semibold text-black ">

                      {property.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-light text-gray">
                      {property.desc}
                    </p>
                    </div>
                    </div>
                    <button className="w-full sm:w-auto text-[#8E1616] transition duration-300 hover:bg-[#8E1616] hover:text-[white] border border-[#8E1616] rounded-xl px-2 sm:px-6 lg:px-8 py-2 items-center mt-3 sm:mt-4 lg:mt-5 text-xs sm:text-sm lg:text-base text-center">View Details</button>
                  </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
  );

}
