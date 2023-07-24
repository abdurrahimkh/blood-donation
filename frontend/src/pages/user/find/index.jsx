import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { Input, Spinner, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useGetDonorsQuery, usePostRequestMutation } from "../../../api/index";
import moment from "moment";
import { bloodGroups, cities } from "../../../constants";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import "./find.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { cities as city } from "../../../constants";
import { toast } from "react-hot-toast";
import { useMediaQuery } from "@mui/material";

const FindDonor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [post, response] = usePostRequestMutation();

  const isMobile = useMediaQuery("(max-width:600px)");
  isMobile;

  const cityRef = useRef(null);
  const bloodTypeRef = useRef(null);
  const contentRef = useRef(null);

  const [params, setParams] = useState(null);

  const { data, isFetching } = useGetDonorsQuery({ page: currentPage, ...params });

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^\d{11}$/, "Invalid phone number")
      .required("Phone number is required"),
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[^\d]+$/, "Invalid Name"),
    gender: yup.string().required("Gender is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    hospital: yup.string().required("Hospital Address is required"),
    city: yup.string().required("City is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      bloodGroup: "",
      gender: "",
      phone: "",
      city: "",
      hospital: "",
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    post({ ...data, blood_group: data.bloodGroup, mobile_number: data.phone });
    reset();
  }

  function handleClick() {
    const filter = {};
    const city = cityRef.current;
    const bloodGroup = bloodTypeRef.current;

    if (city !== null) {
      filter.city = city;
    }

    if (bloodGroup !== null) {
      filter.blood_group = bloodGroup;
    }

    setParams(filter);
  }
  function getBloodGroupRepresentation(value) {
    const bloodGroups = {
      "a-p": "A+",
      "a-n": "A-",
      "b-p": "B+",
      "b-n": "B-",
      "ab-p": "AB+",
      "ab-n": "AB-",
      "o-p": "O+",
      "o-n": "O-",
    };

    return bloodGroups[value] || "";
  }

  useEffect(() => {
    if (response?.error) {
      toast.error(response?.error?.data?.error);
    } else if (response?.data) {
      toast.success(response?.data?.message);
    }
  }, [response]);

  const handleCopyClick = ({ phoneNumber }) => {
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      if (contentRef.current) {
        const content = contentRef.current.innerText;
        navigator.clipboard
          .writeText(content)
          .then(() => toast.success("Phone number copied to clipboard!"))
          .catch((error) => console.error("Failed to copy content:", error));
      }
    }
  };

  return (
    <>
      <section className="py-6  bg-gray-100 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <h1 className="text-3xl text-center font-brooklyn font-semibold text-gray-800 ">
            Find <span className="text-secondary ">Nearby</span> blood donors.
          </h1>

          <div className="flex items-center justify-center flex-col md:flex-row gap-5 border p-10 border-b-2 rounded-md border-gray-300">
            <Select className="w-72  md:w-[24rem] px-4 md:px-0" placeholder="-- Select City --" options={cities} onChange={(selectedOption) => (cityRef.current = selectedOption.value)} />
            <Select className="w-72  md:w-[29rem] lg:w-96 px-4 md:px-0" placeholder="-- Select Blood Type --" options={bloodGroups} onChange={(selectedOption) => (bloodTypeRef.current = selectedOption.value)} />

            <button disabled={isFetching} onClick={handleClick} className="relative w-56 inline-flex items-center justify-center p-4  py-1.5 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Search</span>
              <span className="relative invisible">Search</span>
            </button>
          </div>

          {data?.data.length === 0 && (
            <div className="center flex-col gap-10 pt-3">
              <p className="text-3xl font-black block font-brooklyn">No Donor Found</p>
              <img src="/icons/error.png" alt="icon" className="h-32 w-32" />
            </div>
          )}

          {isFetching ? (
            <div className="center h-[20rem] w-full">
              <Spinner color="red" className="h-8 w-8" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {data &&
                data?.data.map((card) => (
                  <article key={card._id} className="flex flex-col bg-gray-50 border rounded-md border-secondary">
                    <div className="center mt-2">
                      <img alt="card-image" className="object-cover w-[6.5rem]" src={`/icons/${card?.blood_group}.png`} />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <p className="text-xs pb-3 tracki uppercase text-violet-600">Blood Group : {getBloodGroupRepresentation(card?.blood_group)}</p>
                      <h3 className="text-sm leading-6">Name : {card.name}</h3>
                      <h3 className="text-sm leading-6">City : {card.city}</h3>
                      <h3 className="text-sm leading-6">Contact : 0{card.mobile_number}</h3>
                      <p className="hidden" ref={contentRef}>
                        0{card.mobile_number}
                      </p>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 mt-2">
                        <span className="font-bold">{moment(card?.createdAt).fromNow()}</span>
                        <div className="center gap-3">
                          <a href={`http://wa.me/+92${card?.mobile_number}`} target="_blank">
                            <img src="/icons/whatsapp.png" alt="icon" className="w-6 hover:cursor-pointer" />
                          </a>
                          <img onClick={() => handleCopyClick(card?.mobile_number)} src="/icons/phone-call.png" alt="icon" className="w-6 hover:cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          )}

          <div className="center">
            <ResponsivePagination nextLabel="Next" previousLabel="Prev" current={currentPage} total={Math.ceil(data?.count / data?.per_page)} onPageChange={(page) => setCurrentPage(page)} />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 pb-14">
        <div className="px-4 py-16 mx-auto bg-white rounded-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-16">
          <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mb-10">
            Request <span className="text-secondary ">Donation</span>
          </h1>
          <div className="center flex-col lg:flex-row gap-5">
            <div className="lg:py-6 lg:mr-28 lg:ml-20">
              <div className="p-4 py-6 rounded-lg bg-white w-[28rem] md:p-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <Input label="Patient Name" type="text" className="py-[1.3rem]" error={Boolean(errors?.name)} {...register("name")} />
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
                        {...register("bloodGroup")}
                      >
                        <option value="" disabled selected>
                          Blood Group
                        </option>
                        <option value="a-p">A+</option>
                        <option value="a-n">A-</option>
                        <option value="b-p">B+</option>
                        <option value="b-n">B-</option>
                        <option value="ab-p">AB+</option>
                        <option value="ab-n">AB-</option>
                        <option value="o-p">O+</option>
                        <option value="o-n">O-</option>
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
                        {...register("gender")}
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
                      <Input label="Phone" type="text" className="h-[2.6rem]" error={Boolean(errors?.phone)} {...register("phone")} />
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
                        {...register("city")}
                      >
                        <option value="" disabled selected>
                          City
                        </option>
                        {city.map((city) => (
                          <option value={city.value}>{city.label}</option>
                        ))}
                      </select>
                      {errors?.city && (
                        <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                          <InformationCircleIcon className="w-4 h-4 -mt-px" />
                          {errors?.city?.message}
                        </Typography>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <Input label="Hospital Location" type="text" error={Boolean(errors?.hospital)} {...register("hospital")} />

                    {errors?.hospital && (
                      <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                        <InformationCircleIcon className="w-4 h-4 -mt-px" />
                        {errors?.hospital?.message}
                      </Typography>
                    )}
                  </div>
                  {response?.isLoading ? (
                    <div className="center">
                      <Spinner color="red" />
                    </div>
                  ) : (
                    <button className="relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                      <span className="relative invisible">Submit</span>
                    </button>
                  )}
                </form>
              </div>
            </div>
            <div className="relative">
              <img className="w-[20rem] h-[20rem]" src="/request.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindDonor;
