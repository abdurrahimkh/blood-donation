import React from "react";
import { useParams } from "react-router-dom";
import { eventsList } from "../constants";

const EventDetails = () => {
  const { id } = useParams();
  console.log(typeof id);
  const event = eventsList.find((event) => event.id === Number(id));

  return (
    <section class="text-gray-600 body-font">
      <div class="mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="!h-[20rem] lg:w-[60%] md:w-3/6 w-5/6 mb-10 object-cover object-center rounded lg:rounded-lg" alt="hero" src={event.image} />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="font-black sm:text-4xl text-3xl mb-4 text-gray-900 font-brooklyn">{event.title}</h1>
          <p class="mt-5 text-[1.3rem] mb-8 leading-relaxed">{event.short_desc}</p>
          <p className="text-justify text-[1.1rem]">{event.full_desc}</p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
