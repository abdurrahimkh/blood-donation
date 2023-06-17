import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import WhyDonate from "./WhyDonate";
import Events from "./Events";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <WhyDonate />
      <Events />
      <Gallery />
    </>
  );
};

export default Home;
