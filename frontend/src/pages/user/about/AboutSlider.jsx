import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./about.css";

const AboutSlider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" grabCursor={true} loop={true}>
        <SwiperSlide>
          <div className="first ">
            <div className="drop-animation">
              <p className=" text-[3.2rem] text-white font-bold font-mono pt-[20rem] pl-7">GIVE THE GIFT OF LIFE</p>
              <p className=" text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className=" w-[30rem] text-sm text-white font-brooklyn pl-7 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel voluptate laborum quidem dicta explicabo quas, harum aspernatur in eveniet distinctio, quia nulla unde dolor voluptas ducimus omnis ab nemo?</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second">
            <div className="drop-animation">
              <p className="text-[3.2rem] text-white font-bold font-mono pt-[20rem] pl-7">YOUR TEXT GOES HERE</p>
              <p className="text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className="w-[30rem] text-sm text-white font-brooklyn pl-7 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel voluptate laborum quidem dicta explicabo quas, harum aspernatur in eveniet distinctio, quia nulla unde dolor voluptas ducimus omnis ab nemo?</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="third">
            <div className="drop-animation">
              <p className="text-[3.2rem] text-white font-bold font-mono pt-[20rem] pl-7">YOUR TEXT GOES HERE</p>
              <p className="text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className="w-[30rem] text-sm text-white font-brooklyn pl-7 mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel voluptate laborum quidem dicta explicabo quas, harum aspernatur in eveniet distinctio, quia nulla unde dolor voluptas ducimus omnis ab nemo?</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSlider;
