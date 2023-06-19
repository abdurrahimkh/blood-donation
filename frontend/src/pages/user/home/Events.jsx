import React from "react";

const Events = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mb-5">
        Latest <span className="text-secondary ">Events</span>
      </h1>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full ">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl p-2 ">
          <a href="/" aria-label="Article">
            <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" className="object-cover w-full h-64 rounded" alt="" />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p className="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p className="mb-4 text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl p-2">
          <a href="/" aria-label="Article">
            <img src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" className="object-cover w-full h-64 rounded" alt="" />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">4 Nov 2020</p>
            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p className="text-2xl font-bold leading-5">Conquer the World</p>
            </a>
            <p className="mb-4 text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl p-2">
          <a href="/" aria-label="Article">
            <img src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-full h-64 rounded" alt="" />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">28 Dec 2020</p>
            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p className="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p className="mb-4 text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
          </div>
        </div>
      </div>
      <div className="center">
        <button className="mt-6 relative w-[10rem] inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">See More </span>
          <span className="relative invisible">See More </span>
        </button>
      </div>
    </div>
  );
};

export default Events;
