import React from "react";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <img src="http://bitsensedigital.com/wp-content/uploads/elementor/thumbs/Untitled-design-4-q7daqcusd78my1f668gseeuhtjxli2fkwhwqvl41wg.png" alt="" />
        </div>
        <div className="px-5 pt-6 pb-5 text-center lg:w-[60%]">
          <div className="">
            <span className="text-3xl font-brooklyn text-gray-800 text-center mb-5 border-b-4 border-b-primary">
              Blood <span className="text-secondary">Donation</span>
            </span>
            <p className="px-5 text-black leading-9 pt-5 text-[1.1rem]">
              Welcome to our blood donation website, where you have the power to make a life-saving impact. By donating your blood, you become a true hero, offering hope to those in need. Join our compassionate community and contribute to the noble cause of saving lives. Together, we can create a
              world where every drop of blood counts and where generosity knows no bounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
