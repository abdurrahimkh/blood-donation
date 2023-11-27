import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" grabCursor={true} loop={true}>
        <SwiperSlide>
          <div className="first_image">
            <div className="drop-animation  -mt-16">
              <p className="banner-heading text-[19px] mb-0  lg:mb-5 lg:text-[3.2rem] text-white font-bold font-mono pt-48 pl-7">GIVE THE GIFT OF LIFE</p>
              <p className="banner-heading text-[19px]  lg:text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className="banner-text w-[32rem]  lg:w-[40rem] pr-10 sm:pr-0 text-[12px]  text-white font-brooklyn pl-7 mt-6 lg:mt-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br className="block sm:hidden" /> Qui vel voluptate laborum quidem dicta explicabo quas,
                <br className="block sm:hidden" /> harum aspernatur in eveniet distinctio, quia nulla unde <br className="block sm:hidden" /> dolor voluptas ducimus omnis ab nemo?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second_image">
            <div className="drop-animation -mt-16">
              <p className="text-[19px] mb-0  lg:mb-5 lg:text-[3.2rem] text-white font-bold font-mono pt-48 pl-7">YOUR TEXT GOES HERE</p>
              <p className="text-[19px]  lg:text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className="w-[32rem]  lg:w-[40rem] pr-10 sm:pr-0 text-[12px]  text-white font-brooklyn pl-7 mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel voluptate laborum quidem dicta explicabo quas, harum aspernatur in eveniet distinctio, quia nulla unde dolor voluptas ducimus omnis ab nemo?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="third_image">
            <div className="drop-animation -mt-16">
              <p className="text-[19px] mb-0  lg:mb-5 lg:text-[3.2rem] text-white font-bold font-mono pt-48 pl-7">YOUR TEXT GOES HERE</p>
              <p className="text-[19px]  lg:text-[3.2rem] text-white font-bold font-mono pl-7 leading-[2rem]">DONATE BLOOD</p>
              <p className="w-[32rem] md:w-[20rem] lg:w-[40rem] pr-10 sm:pr-0 text-[12px]  text-white font-brooklyn pl-7 mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel voluptate laborum quidem dicta explicabo quas, harum aspernatur in eveniet distinctio, quia nulla unde dolor voluptas ducimus omnis ab nemo?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
