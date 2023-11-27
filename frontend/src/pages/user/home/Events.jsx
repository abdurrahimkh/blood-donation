import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events.css";
import { eventsList } from "../../../constants";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mb-5">
        Latest <span className="text-secondary ">Events</span>
      </h1>

      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="eventsSwiper"
      >
        {eventsList.map((event) => (
          <SwiperSlide>
            <Link to={`/events/${event.id}`} key={event.id} className="overflow-hidden transition-shadow duration-300  rounded-xl p-2 ">
              <div aria-label="Article">
                <img style={{ cursor: "pointer" }} src={event.image} className="object-cover w-full h-64 rounded" alt="" />
              </div>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">{event.date}</p>
                <div aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                  <p className="text-2xl font-bold leading-5">{event.title}</p>
                </div>
                <p className="mb-4 text-gray-700">{event.short_desc}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
