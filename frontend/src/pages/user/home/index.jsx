import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import WhyDonate from "./WhyDonate";
import Events from "./Events";
import Gallery from "./Gallery";
import Animation from "../../../components/Animation";

const Home = () => {
  return (
    <>
      <Carousel />
      <Animation left={false}>
        <About />
      </Animation>
      <Animation left={true}>
        <WhyDonate />
      </Animation>
      <Animation left={false}>
        <Events />
      </Animation>
      <Animation left={true}>
        <Gallery />
      </Animation>
    </>
  );
};

export default Home;
