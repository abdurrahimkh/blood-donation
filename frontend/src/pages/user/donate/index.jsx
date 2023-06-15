import React from "react";
import { Link } from "react-router-dom";
import Illustration from "../../../assets/gif/donor.gif";

const Donate = () => {
  return (
    <div className="container px-6   mx-auto lg:h-[91vh] py-[6rem] ">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg space-y-4">
            <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Become a <span className="text-secondary ">Donor</span>
            </h1>
            <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Start saving <span className="text-secondary ">Lives</span>
            </h1>

            <p className="pt-5 pb-3 text-gray-600 dark:text-gray-400">
              By becoming a donor, you become a beacon of hope for those in dire need of blood transfusions. Countless lives can be transformed and saved through your selfless act of giving. Remember, your simple act of donating blood can be a lifeline for accident victims, individuals undergoing
              complex surgeries, and those battling life-threatening conditions.
            </p>
            <Link to="/donor/register" className="mt-6 relative w-[15rem] py-1.5 inline-flex items-center justify-center p-4 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Register Now</span>
              <span className="relative invisible">Register Now</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img className="w-[50rem] lg:max-w-2xl" src={Illustration} alt="Catalogue-pana.svg" />
        </div>
      </div>
    </div>
  );
};

export default Donate;
