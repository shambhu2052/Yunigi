"use client";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
interface servicetype {
  imagepath: string;
  title: string;
  description: string;
}
const services = [
  {
    imagepath: "/../assets/service1.webp",
    title: "Facility Tour",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imagepath: "/../assets/service2.webp",
    title: "Activity",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imagepath: "/../assets/service3.webp",
    title: "Gaurment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imagepath: "/../assets/service4.webp",
    title: "Private lodging",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
class Imageslides extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      cssEase: "linear",

      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="2xl:max-w-[1180px] container mx-auto my-5 ">
        <Slider {...settings}>
          {services.map((val: servicetype, index: number) => {
            return (
              <div className="serviceslider p-3 " key={index}>
                <img
                  src={val?.imagepath}
                  alt="image of services"
                  className="w-full h-[200px]"
                />
                <div className="bg-white px-5 py-5 rounded-bl-[4rem] relative overflow-hidden">
                  <h3 className="text-center font-semibold text-xl pb-3 text-[#ED514E]">
                    {val?.title}
                  </h3>
                  <p className="text-base font-normal ">{val?.description}</p>
                  <div className="absolute right-[-12%] bottom-[-25%] w-[100px] h-[100px] bg-[#Ed514E] rounded-full"></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Imageslides;
