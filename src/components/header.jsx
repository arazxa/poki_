import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import logo from "../assets/logo.png";
import CategoryCard from "./category-card";

const Header = () => {
  const navigate = useNavigate();
  const [carousel, setCarousel] = useState([
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
    {
      image:
        "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/5556817d03e65900d9ca5f8cac175f79.png",
      name: "Subway Surfers",
    },
  ]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:container mx-auto p-5">
        <div className="grid grid-cols-12 items-center justify-center nowra">
          <a
            href="/"
            className="box xs:m-3 sm:m-6 md:m-2 m-0 xxs:m-3 md:col-span-1 xs:col-span-2 xxs:col-span-3 col-span-4 rounded-lg bg-white/100 p-3 aspect-square flex items-center hover:scale-105 duration-500"
          >
            <img src={logo} className="" />
          </a>
          <Slider
            {...settings}
            className="md:col-span-11 xs:col-span-10 xxs:col-span-9 col-span-8"
          >
            {carousel.map((item, index) => {
              return (
                <div
                  className="p-2"
                  onClick={() => {
                    navigate("/post");
                  }}
                >
                  <CategoryCard name={item.name} image={item.image} url={"#"} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Header;
