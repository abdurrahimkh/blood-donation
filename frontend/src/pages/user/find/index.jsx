import React, { useState } from "react";
import Select from "react-select";
import Icn from "../../../assets/img/card-icon.png";
import Modal from "../../../components/Modal";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const FindDonor = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <section className="py-6  bg-gray-100 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <h1 className="text-3xl text-center font-brooklyn font-semibold text-gray-800 ">
            Find <span className="text-secondary ">Nearby</span> blood donors.
          </h1>
          <div className="flex items-center justify-center flex-col md:flex-row gap-5 border p-10 border-b-2 rounded-md border-gray-300">
            <Select className="w-96 px-4 md:px-0" placeholder="-- Select City --" />
            <Select className="w-96 px-4 md:px-0" placeholder="-- Select Blood Type --" />
            <button className="relative w-56 inline-flex items-center justify-center p-4  py-1.5 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
            <div className="flex">
              <a href="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>

              <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                1
              </a>

              <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                2
              </a>

              <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                ...
              </a>

              <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                9
              </a>

              <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                10
              </a>

              <a href="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-secondary  hover:text-white dark:hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className=" fixed bottom-4 right-10 inline-block">
            <button onClick={() => setOpen(true)} className="inline-flex overflow-hidden text-white bg-secondary rounded group shadow-md  shadow-secondary hover:shadow-lg   hover:shadow-secondary">
              <span className="px-3.5 py-2 text-white bg-primary group-hover:bg-blue-900  flex items-center justify-center">
                <img src="/icons/blood-plus.png" alt="Icon" className="w-7 animate-bounce" />
              </span>
              <span className="pl-4 pr-5 py-2.5 font-brooklyn font-extrabold">Request for blood</span>
            </button>
          </div>
        </div>
      </section>
      <Modal open={open} setOpen={setOpen}>
        <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-0">
          <p className="text-primary text-2xl font-bold font-brooklyn mb-4">Request Donation</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Input
                label="Patient Name"
                type="text"
                className="py-[1rem] "
                error={Boolean(errors?.name)}
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z_ ]*$/,
                    message: "Invalid Name",
                  },
                })}
              />
              {errors?.name && (
                <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                  <InformationCircleIcon className="w-4 h-4 -mt-px" />
                  {errors?.name?.message}
                </Typography>
              )}
            </div>
            <div className="flex gap-3">
              <div className="w-56 mb-3 ">
                <select
                  style={{ border: Boolean(errors?.bloodGroup) && "1px solid red", color: Boolean(errors?.bloodGroup) && "red" }}
                  label="Blood Group"
                  className="w-full bg-transparent text-blue-gray-500 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 rounded-[7px] border-blue-gray-200 py-[0.7rem] focus:border-blue-500  hover:cursor-pointer"
                  {...register("bloodGroup", {
                    required: {
                      value: true,
                      message: "Blood Group is required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    Blood Group
                  </option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
                {errors?.bloodGroup && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.bloodGroup?.message}
                  </Typography>
                )}
              </div>
              <div className="w-56 mb-3 ">
                <select
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Gender is required",
                    },
                  })}
                  style={{ border: Boolean(errors?.gender) && "1px solid red", color: Boolean(errors?.bloodGroup) && "red" }}
                  className="w-full bg-transparent text-blue-gray-500 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 rounded-[7px] border-blue-gray-200 focus:border-blue-500  py-[0.7rem] hover:cursor-pointer"
                >
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                {errors?.gender && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.gender?.message}
                  </Typography>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-56 mb-3">
                <Input
                  label="Phone"
                  type="text"
                  error={Boolean(errors?.phone)}
                  {...register("phone", {
                    required: "You must specify a phone number",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid phone number.",
                    },
                    min: {
                      value: 11,
                      message: "number must be 11 digits",
                    },
                    max: {
                      value: 11,
                      message: "number must be 11 digits",
                    },
                  })}
                />
                {errors?.phone && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.phone?.message}
                  </Typography>
                )}
              </div>
              <div className="w-56 mb-3 ">
                <select
                  style={{ border: Boolean(errors?.city) && "1px solid red", color: Boolean(errors?.city) && "red" }}
                  label="Blood Group"
                  className="w-full bg-transparent text-blue-gray-500 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 rounded-[7px] border-blue-gray-200 py-[0.7rem] focus:border-blue-500  hover:cursor-pointer"
                  {...register("city", {
                    required: {
                      value: true,
                      message: "City is required",
                    },
                  })}
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  <option>Peshawar</option>
                  <option>Islamabad</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Multan</option>
                </select>
                {errors?.bloodGroup && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.bloodGroup?.message}
                  </Typography>
                )}
              </div>
            </div>
            <div className="mb-3">
              <Input
                label="Hospital Location"
                type="text"
                error={Boolean(errors?.address)}
                {...register("address", {
                  required: "You must specify an address",
                })}
              />

              {errors?.address && (
                <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                  <InformationCircleIcon className="w-4 h-4 -mt-px" />
                  {errors?.address?.message}
                </Typography>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default FindDonor;
