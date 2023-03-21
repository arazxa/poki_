import logo from "../assets/logo.png";
import "./style.css";
import "./teststyles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";

import { MuuriComponent } from "muuri-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
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

  const [posts, setPosts] = useState([]);
  const Item = ({ image, size, name, index, video }) => {
    return (
      <div
        className={`item h${size} w${size} INDEX-${index}`}
        onMouseEnter={(e) => {
          loadvideo(e.target, index);
        }}
        onClick={() => {
          navigate("/post");
        }}
      >
        <div className="item-content">
          <div
            className="rounded-lg overflow-hidden hover:scale-105 duration-500 cursor-pointer shadow-lg relative"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center items-center pointer-events-none">
              <span className="visibility-hidden">{name}</span>
              <span className="posttitle z-50 absolute bottom-0 pt-1 pb-2 text-white font-bold left-0 w-full line-height-normal text-center bg-black/5 opacity-0">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const children = posts.map((props, index) => (
    <Item
      key={index}
      name={props.name}
      size={props.size}
      image={props.image}
      video={props.video}
      index={index}
    />
  ));

  useEffect(() => {
    let p = [
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
        video:
          "https://v.poki.com/61215127-3e37-4dce-b19d-ee220bc5a41a/thumbnail.2x2.vp9.mp4",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "2",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "3",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/7a35d4a468a820f1dc72b9ad22e9aeec.jpg",
        video:
          "https://v.poki.com/2043a94c-1d69-4aff-a740-4e1510b1b4d0/thumbnail.3x3.vp9.mp4",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "3",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Venge.io",
        size: "2",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=408,height=408,fit=cover,f=auto/41e1eb2b214fcebb66ddcb924e936f96.png",
        video:
          "https://v.poki.com/cef67ef6-a741-4157-8f91-7e4d6020316d/thumbnail.2x2.vp9.mp4",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "2",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
      {
        name: "Crazy Cars",
        size: "1",
        image:
          "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
      },
    ];
    setPosts(p);
  }, []);

  const loadvideo = (tag, index) => {
    if (posts[index].video != undefined)
      tag.insertAdjacentHTML(
        "afterend",
        `<video autoplay playsinline src=${posts[index].video} class="w-full h-full absolute" style="top: 0;left: 0;width: 100%;height: 100%;border-radius: 0.5rem;" onmouseleave="this.remove()"></video>`
      );
  };

  return (
    <div className="main min-h-screen">
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
                  <div className="rect rounded-lg bg-white/100 overflow-hidden hover:scale-105 duration-500 relative">
                    <a className="grid grid-cols-2 items-center text-black cursor-pointer">
                      <img
                        src={item.image}
                        className=" w-full h-full object-cover object-center"
                      />
                      <p className="p-1 font-semibold text-sm">{item.name}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="gridwrap">
          <MuuriComponent layout={{ fillGaps: true }}>
            {children}
          </MuuriComponent>
        </div>
      </div>
    </div>
  );
}
