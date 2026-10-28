import homeHero from "../assets/images/homeHero.png";
import facebook from "../assets/icons/facebook.png";
import Group from "../assets/icons/Group.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tiktok.png";

export default function Hero({ bg, title, desc, btn, btncontent, icons }) {
  return (
  
<section
      className="relative h-125 sm:h-186 w-full bg-cover bg-center mb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 z-2 flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white">
        <h1 className="font-playfair w-full max-w-175 whitespace-pre-line text-3xl sm:text-4xl font-bold leading-[1.3] text-[36px] sm:text-[48px]">
          {title}
        </h1>

        <p className="text-[#CEC7C7] whitespace-pre-line mt-5 w-full max-w-212.5 text-[13px] sm:text-[15px] leading-normal ">
          {desc}
        </p>
        {btn && (
          <button className="mt-6 sm:mt-8 w-40 sm:w-47.5 rounded-md bg-linear-to-r from-[#8E1616] to-[#C94545] px-4 sm:px-6 py-2.5 font-medium text-white transition hover:brightness-110">
            {btncontent}
          </button>
        )}
      </div>
      <div className="absolute z-2 flex flex-col bottom-8 sm:bottom-50 left-3 sm:left-9 gap-2 sm:gap-4">
        <img
          className="size-8 sm:size-12 border-2 sm:border-3 border-white rounded-full p-1 sm:p-2"
          src={facebook}
          alt="facebook"
        />
        <img
          className="size-8 sm:size-12 border-2 sm:border-3 border-white rounded-full p-1 sm:p-2"
          src={Group}
          alt="twitter"
        />
        <img
          className="size-8 sm:size-12 border-2 sm:border-3 border-white rounded-full p-1 sm:p-2"
          src={instagram}
          alt="instagram"
        />
        <img
          className="size-8 sm:size-12 border-2 sm:border-3 border-white rounded-full p-1 sm:p-2"
          src={tiktok}
          alt="tiktok"
        />
      </div>
    </section>

  );
}
