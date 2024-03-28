import Image from "next/image";
import Image1 from "../../../../public/mobile2-Photoroom.png-Photoroom.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HeroSection() {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        {/* <Slider {...settings}> */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Lorem ipsum </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem odio mollitia asperiores ab earum perferendis
                deserunt, voluptatibus, quam, quibusdam cumque eum illum unde?
                Dolorem iusto esse excepturi voluptatem odit ex.
              </p>
            <div>
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
              Order Now
            </button>
            </div>
          </div>
          {/* image section */}
          <div className="order-1 sm:order-2">
<div className="relative z-10">
    <Image src={Image1} alt="Hero image" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" />
</div>
          </div>
          </div>
        </div>
        {/* </Slider> */}

      </div>
    </div>
  );
}
