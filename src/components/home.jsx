import logo from "../assets/logo.png";
import "./style.css";
import "./teststyles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useState } from "react";

import { MuuriComponent } from "muuri-react";
import { useNavigate } from "react-router-dom";

import Item from "./Item";
import axios from "axios";
import { environment } from "../environment";

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

  const children = posts.map((props, index) => (
    <Item
      key={index}
      name={props.name}
      size={props.size}
      image={props.image}
      video={props.video}
      index={index}
      id={props.id}
    />
  ));

  let p;
  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    await axios
      .get(
        environment.BACKEND +
          environment.POSTS_API +
          "?acf_format=standard&&_embed"
      )
      .then((res) => {
        console.log(
          environment.BACKEND +
            environment.POSTS_API +
            "?acf_format=standard&&_embed"
        );

        p = res.data;

        p = p.map((post, index) => {
          return {
            image: post._embedded["wp:featuredmedia"][0].source_url,
            name: post.title.rendered,
            size: 1, //post.acf.size.split(":")[1],
            video: post.acf.video,
            id: post.id,
          };
        });

        setPosts(p);
      });
  }

  return (
    <div className=" min-h-screen">
      <div className="lg:container mx-auto p-5">
        <div className="gridwrap">
          <MuuriComponent layout={{ fillGaps: true }}>
            {children}
          </MuuriComponent>
        </div>
      </div>
    </div>
  );
}

// let p = [
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//     video:
//       "https://v.poki.com/61215127-3e37-4dce-b19d-ee220bc5a41a/thumbnail.2x2.vp9.mp4",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "2",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "3",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/7a35d4a468a820f1dc72b9ad22e9aeec.jpg",
//     video:
//       "https://v.poki.com/2043a94c-1d69-4aff-a740-4e1510b1b4d0/thumbnail.3x3.vp9.mp4",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "3",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Venge.io",
//     size: "2",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=408,height=408,fit=cover,f=auto/41e1eb2b214fcebb66ddcb924e936f96.png",
//     video:
//       "https://v.poki.com/cef67ef6-a741-4157-8f91-7e4d6020316d/thumbnail.2x2.vp9.mp4",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "2",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
//   {
//     name: "Crazy Cars",
//     size: "1",
//     image:
//       "https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f8a2160e52333ee0d44ec19e8ca65139.png",
//   },
// ];
