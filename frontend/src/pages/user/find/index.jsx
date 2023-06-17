import React from "react";
import Select from "react-select";
import Icn from "../../../assets/img/card-icon.png";

const FindDonor = () => {
  return (
    <section className="py-6  bg-gray-100 text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <h1 className="text-3xl text-center font-brooklyn font-semibold text-gray-800 ">
          Find <span className="text-secondary ">Nearby</span> blood donors.
        </h1>
        <div className="center gap-5 border p-10 border-b-2 rounded-md border-gray-300">
          <Select className="w-96" placeholder="-- Select City --" />
          <Select className="w-96" placeholder="-- Select Blood Type --" />
          <button className="relative w-56 inline-flex items-center justify-center p-4  py-1.5 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Search</span>
            <span className="relative invisible">Search</span>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <article className="flex flex-col bg-gray-50 border rounded-md border-secondary">
              <div className="center mt-2 relative">
                <img alt="card-image" className="object-cover w-28" src={Icn} />
                <p className="absolute font-brooklyn text-2xl font-bold left-[7.9rem] top-[3.4rem] text-secondary">AB+</p>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs pb-3 tracki uppercase text-violet-600">Blood Group : AB+</p>
                <h3 className="text-sm leading-6">Name : Abdur Rahim</h3>
                <h3 className="text-sm leading-6">City : Lahore</h3>
                <h3 className="text-sm leading-6">Contact : 03153158978</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-2">
                  <span>June 1, 2020</span>
                  <div className="center gap-3">
                    <img src="/icons/chat.png" alt="icon" className="w-6 hover:cursor-pointer" />
                    <img src="/icons/whatsapp.png" alt="icon" className="w-6 hover:cursor-pointer" />
                    <img src="/icons/phone-call.png" alt="icon" className="w-6 hover:cursor-pointer" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="center">
          <div class="flex">
            <a href="#" class="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </a>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              1
            </a>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              2
            </a>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              ...
            </a>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              9
            </a>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              10
            </a>

            <a href="#" class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div class=" fixed bottom-4 right-10 inline-block">
          <button class="inline-flex overflow-hidden text-white bg-secondary rounded group shadow-md  shadow-secondary hover:shadow-lg   hover:shadow-secondary">
            <span class="px-3.5 py-2 text-white bg-gray-500 group-hover:bg-gray-600  flex items-center justify-center">
              <img src="/icons/blood-plus.png" alt="Icon" className="w-7 animate-bounce" />
            </span>
            <span class="pl-4 pr-5 py-2.5 font-brooklyn font-extrabold">Request for blood</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindDonor;
