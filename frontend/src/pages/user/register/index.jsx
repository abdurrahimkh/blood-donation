import React, { useEffect, useState } from "react";
import { Input, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";
import { useRegisterMutation } from "../../../api";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { cities } from "../../../constants";

const Register = () => {
  const [captachVerified, setCaptachVerified] = useState(false);
  const [registerUser, response] = useRegisterMutation();
  const navigate = useNavigate();
  console.log(response);

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^\d{11}$/, "Invalid phone number")
      .required("Phone number is required"),
    age: yup.number().typeError("Invalid Age").min(16, "Age must be greater than 16").max(64, "Age must be less than 65").required("Age is required"),
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[^\d]+$/, "Invalid Name"),
    gender: yup.string().required("Gender is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    address: yup.string().required("Address is required"),
    username: yup.string().required("Username is required"),
    city: yup.string().required("City is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // Handle Form Using react hook form
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      bloodGroup: "",
      gender: "",
      age: "",
      address: "",
      phone: "",
      email: "",
      username: "",
      city: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  // Form Submission call to api
  function onSubmit(data) {
    registerUser({ ...data, blood_group: data.bloodGroup, mobile_number: data.phone });
  }

  function handleCaptcha(e) {
    setCaptachVerified(true);
  }

  useEffect(() => {
    if (response?.error) {
      toast.error(response?.error?.data?.error);
    } else if (response?.data) {
      // toast.success(response?.data?.message);
      toast.custom((t) => (
        <div className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-md w-full  bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-500`}>
          <div className="flex-1 w-0 p-1 ">
            <div className="flex items-start">
              <img src="/icons/accept.png" alt="icon" className="h-14 w-14" />
              <div className="ml-3 flex-1">
                <p className="text-md font-medium text-green-900">Registration Success</p>
                <p className="mt-1 text-md text-red-700">A verification link has been sent to your email.</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button onClick={() => toast.dismiss()} className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Close
            </button>
          </div>
        </div>
      ));
      navigate("/email-verification", {
        state: {
          email: response?.data?.data?._doc?.email,
        },
      });
    }
  }, [response]);

  return (
    <section className="md:min-h-[91vh]">
      <div className="container px-6 pt-7 pb-10">
        <div className="g-6 flex gap-5 h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 md:max-h-96 ">
            <h1 className="font-brooklyn text-center text-3xl font-bold text-secondary">Sign up for blood donation</h1>
            <img src="/illu1.png" className="w-full h-full" alt="Phone image" />
          </div>
          <div className="w-11/12 md:w-8/12 lg:ml-6 lg:w-5/12 border border-gray-300 bg-white p-4 rounded-xl shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <Input label="Name" type="text" className="py-[1rem] " error={Boolean(errors?.name)} {...register("name")} />
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
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-[21.7rem] md:w-56 mb-3 ">
                  <Input label="Username" type="text" error={Boolean(errors?.username)} {...register("username")} />
                  {errors?.username && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.username?.message}
                    </Typography>
                  )}
                </div>
                <div className="w-[21.7rem] md:w-56 mb-3 ">
                  <Input label="Age" type="text" error={Boolean(errors?.age)} {...register("age")} />
                  {errors?.age && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.age?.message}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <Input label="Email" type="email" error={Boolean(errors?.email)} {...register("email")} />
                {errors?.email && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.email?.message}
                  </Typography>
                )}
              </div>
              <div className="mb-3">
                <Input
                  label="Address"
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

              <div className="flex gap-3">
                <div className="w-56 mb-3 ">
                  <Input className="h-[2.8rem]" label="Phone" type="text" error={Boolean(errors?.phone)} {...register("phone")} />
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
                    label="city"
                    className="w-full bg-transparent text-blue-gray-500 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 rounded-[7px] border-blue-gray-200 py-[0.7rem] focus:border-blue-500  hover:cursor-pointer"
                    {...register("city")}
                  >
                    <option value="" disabled selected>
                      City
                    </option>
                    {cities.map((city) => (
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
                <Input label="Password" type="password" error={Boolean(errors?.password)} {...register("password")} />
                {errors?.password && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.password?.message}
                  </Typography>
                )}
              </div>
              <div className="">
                <ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCHA_KEY} onChange={handleCaptcha} />
              </div>
              {captachVerified ? (
                <button type="submit" className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Register</span>
                  <span className="relative invisible">Register</span>
                </button>
              ) : (
                <button type="submit" disabled className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border border-gray-500 rounded-lg shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Register</span>
                  <span className="relative invisible">Register</span>
                </button>
              )}
              <p className="mt-3 text-center">
                Alread have an account?{" "}
                <span>
                  <NavLink to="/donor/login" className="underline text-md text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 ">
                    Login
                  </NavLink>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
