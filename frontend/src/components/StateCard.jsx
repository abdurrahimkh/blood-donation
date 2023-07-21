import React from "react";

const StateCard = ({ title, number, w = "14rem", children }) => {
  return (
    <div style={{ width: w }} className={`mb-5  bg-red-400  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4  text-white font-medium group`}>
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">{children}</div>
      <div className="text-right flex flex-col">
        <p className="text-xl">{title}</p>
        <p className="text-xl text-start">{number}</p>
      </div>
    </div>
  );
};

export default StateCard;
