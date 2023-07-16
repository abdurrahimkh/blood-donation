import React from "react";
import "./about.css";
import Gallery from "../home/Gallery";
import Mission from "./Mission";
import Stats from "./Stats";
import Animation from "../../../components/Animation";
import AboutSlider from "./AboutSlider";
import Banner from "../help/Banner";

const About = () => {
  return (
    <>
      {/* <AboutSlider /> */}
      <Banner image={"about.jpeg"} title={"About Us"} subtitle={"Get to Know Us"} />
      <section id="about-us">
        <div className="about">
          <h1 className="text-3xl heading font-brooklyn">
            What is this all <span className="text-secondary ">about</span> ?
          </h1>{" "}
          <br />
          <p className="para head-des text-md !pb-3 md:pb-0">
            We solve the problem of blood emergencies by connecting{" "}
            <span className="one-line">
              <br />
            </span>{" "}
            blood donors directly with people in blood need.{" "}
          </p>
          <div className="flex gap-4 md:gap-0 md:block">
            <div className="about-col rounded-xl md:m-[2%] w-full mx-auto md:w-1/4 ">
              <div className="image center m-2">
                <img src="./icons/about-blood.png" className="!w-[7rem]" />
              </div>
              <h3 className="text-primary">What we do ?</h3>
              <p className="para text-sm">We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
            </div>
            <div className="about-col rounded-xl md:m-[2%] w-full mx-auto md:w-1/4 ">
              <div className="image center m-2">
                <img src="./icons/about-heart.png" className="!w-[7rem]" />
              </div>
              <br />
              <h3>Innovative</h3>
              <p className="para">
                Blood Donation is an innovative approach to address global health.We provide <span>immediate access</span> to blood donors.
              </p>
            </div>
            <div className="about-col rounded-xl md:m-[2%] w-full mx-auto md:w-1/4 ">
              <div className="image center m-2">
                <img src="./icons/about-money.png" className="!w-32 !h-[7.5rem]" />
              </div>
              <h3>Totally Free</h3>
              <p className="para">
                Blood Budyy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally <span>Free of cost.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-6 border-b border-gray-300 w-[50rem] mx-auto" />
      <Animation>
        <Mission />
      </Animation>
      <div className="mt-6 border-b border-gray-300 w-[50rem] mx-auto" />
      <Animation>
        <Stats />
      </Animation>
      <div className="mt-6 mb-10 border-b border-gray-300 w-[50rem] mx-auto" />
      <Animation>
        <Gallery />
      </Animation>
    </>
  );
};

export default About;
