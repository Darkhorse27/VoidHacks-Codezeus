import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "../Stylesheets/parties.css"
import cpilogo from '../assets/logo/cpi.png'
import bjplogo from '../assets/logo/bjp.png'
import aaplogo from '../assets/logo/aap.png'
import aitclogo from '../assets/logo/aitc.png'
import inclogo from '../assets/logo/inc.png'
import splogo from '../assets/logo/sp.png'
import bsplogo from '../assets/logo/bsp.png'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Parties = () => {
  return (
    <div>
      <br />
      <div className="Logosec container">
        <Swiper slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={cpilogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={bjplogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={aitclogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={inclogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={splogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={bsplogo} alt="Logo" /></SwiperSlide>
          <SwiperSlide><img src={aaplogo} alt="Logo" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Parties