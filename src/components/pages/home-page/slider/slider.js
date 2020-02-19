import React, { Component } from "react";
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';
import 'swiper/swiper.scss';
import "./slider.css";
import "./slider.module.scss";
import img1 from "../slider/img1.jpg";
import img2 from "../slider/img2.jpg";
import img3 from "../slider/img3.jpg";

const Slider = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <Swiper {...params}>
      <div className="swiper-slide slide1">
        <img src={img1}></img>
      </div>

      <div className="swiper-slide slide2">
        <img src={img2}></img>
      </div>
      <div className="swiper-slide slide3">
        <img src={img3}></img>
      </div>
      <div className="swiper-slide slide4">
        <img src={img1}></img>
      </div>
    </Swiper>
  );
};

export default Slider;
