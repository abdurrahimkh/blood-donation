import React from "react";
import { useGetMessagesAllQuery } from "../../../api";
import StateCard from "../../../components/StateCard";

const ContactUs = () => {
  const { data, response } = useGetMessagesAllQuery();
  console.log(data);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
      <div className="flex gap-2 ml-3">
        <StateCard title="Messages" number={data && data?.data.length}>
          <img src="/icons/email.png" alt="icon" className="w-9 h-9 object-cover" />
        </StateCard>
      </div>
      <div className="mb-10 border-t border-b divide-y">
        {data?.data?.map((message) => (
          <div key={message._id} className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <div className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">
                  {message.name}
                </div>
                <p className="text-gray-600">{message.createdAt}</p>
                <p className="text-gray-600 lowercase">{message.email}</p>
                <p className="text-gray-600 lowercase">0{message.mobile_number}</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2 ml-10">
              <div className="mb-3">
                <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                  <p className="text-xl lg:text-2xl">{message.subject}</p>
                </div>
              </div>
              <p className="text-gray-700">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
