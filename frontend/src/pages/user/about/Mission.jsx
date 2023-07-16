import React from "react";

const Mission = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="px-5 pt-6 pb-5 text-center lg:w-[60%]">
            <div className="mt-10">
              <span className="text-3xl font-brooklyn text-gray-800 text-center mb-5 border-b-4 border-b-primary">
                Our <span className="text-secondary  ">Mission</span>
              </span>
              <p className="px-5 text-black leading-9 pt-5 text-[1.1rem]">
                We are driven by a singular mission: to save lives through the power of blood donation. We believe that every drop of blood has the potential to be a lifeline for someone in need. With this conviction, we have created a platform that connects generous donors with individuals who
                require life-saving blood transfusions.
              </p>
            </div>
          </div>
          <div>
            <img src="http://bitsensedigital.com/wp-content/uploads/elementor/thumbs/Untitled-design-4-q7daqcusd78my1f668gseeuhtjxli2fkwhwqvl41wg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
