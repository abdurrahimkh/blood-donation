import React from "react";
import "./banner.css";

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="w-screen relative banner center" style={{ backgroundImage: `linear-gradient(120deg, #fb0008b5, #4382ffb4), url(${image})`, height: "calc(100vh - 58px)", backgroundSize: "100% 100%" }}>
      <div>
        <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgb(250, 250, 250)" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,256C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
      <div className="drop-animation-banner">
        <p className="text-white text-5xl font-brooklyn font-black">{title}</p>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs flex items-center">
            <div className="flex-grow border-b-4 border-white "></div>
            <div className="mx-4 text-white">{subtitle}</div>
            <div className="flex-grow border-b-4 border-white "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
