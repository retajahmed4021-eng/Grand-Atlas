import Title from "./Title";

import SliderImport from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import handimage1 from "../assets/images/handimage1.png";
import handimage2 from "../assets/images/handimage2.png";
import handimage3 from "../assets/images/handimage3.png";
import handimage4 from "../assets/images/handimage4.jpg";
import handimage5 from "../assets/images/handimage5.jpg";

const Slider = SliderImport.default ?? SliderImport;

function HandSelected() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
  };
  const properties = [
    {
      image: handimage1,
      title: "01. Palm Hills Office No.3",
    },
    {
      image: handimage2,
      title: "02. Hacienda Duplex No.4",
    },
    {
      image: handimage3,
      title: "03. Sawary Family Villa",
    },
    {
      image: handimage4,
      title: "04. Palm Hills Luxury Villa",
    },
    {
      image: handimage5,
      title: "05. Hacienda Modern Residence",
    },
  ];

  return (
    <section className="w-full py-12 px-0 sm:p-4 lg:p-9 overflow-hidden mb-20 ">
      <Title title="Hand-Selected Masterpieces" cn="text-center mb-6" />

      <div className="w-full mx-auto px-1">
        <Slider {...settings}>
          {properties.map((property, index) => (
            <div key={index} className="px-1.5">
              <div className="w-full">
                <div className="w-full h-50 sm:h-80 lg:h-89 overflow-hidden rounded-xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover object-center "
                  />
                </div>

                <h3 className="mt-4 text-base font-semibold text-black">
                  {property.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HandSelected;
