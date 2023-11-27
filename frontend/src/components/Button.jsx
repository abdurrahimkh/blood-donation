import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button {...rest} className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">{title}</span>
      <span className="relative invisible">{title}</span>
    </button>
  );
};

export default Button;
