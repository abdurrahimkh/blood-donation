import React, { useState } from "react";
import { Input, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [captachVerified, setCaptachVerified] = useState(false);
  const {
    register,
    handleSubmit,
    setError,

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
  });

  function onSubmit(data) {
    if (!data.gender) {
      setError("gender", {
        type: "manual",
        message: "gender is required",
      });
    }
    console.log(data);
  }

  function handleCaptcha(e) {
    setCaptachVerified(true);
  }
  return (
    <section className="md:h-[91vh]">
      <div className="container px-6 py-10">
        <div className="g-6 flex gap-5 h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <h1 className="font-brooklyn text-center text-3xl font-bold text-secondary">Sign up for blood donation</h1>
            <img src="/illu1.png" className="w-full" alt="Phone image" />
          </div>

          <div className="w-11/12 md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <Input
                  label="Name"
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
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-[21.7rem] md:w-56 mb-3 ">
                  <Input
                    label="Username"
                    type="text"
                    error={Boolean(errors?.username)}
                    {...register("username", {
                      required: {
                        value: true,
                        message: "username is required",
                      },
                    })}
                  />
                  {errors?.username && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.username?.message}
                    </Typography>
                  )}
                </div>
                <div className="w-[21.7rem] md:w-56 mb-3 ">
                  <Input
                    label="Age"
                    type="text"
                    error={Boolean(errors?.age)}
                    {...register("age", {
                      required: "Age is required",
                      min: {
                        value: 16,
                        message: "You must be at least 16 years old",
                      },
                      max: {
                        value: 65,
                        message: "You must not be older than 65",
                      },
                    })}
                  />
                  {errors?.age && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.age?.message}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <Input
                  label="Email"
                  type="email"
                  error={Boolean(errors?.email)}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "invalid email",
                    },
                  })}
                />
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
                  label="Password"
                  type="password"
                  error={Boolean(errors?.password)}
                  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                {errors?.password && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.password?.message}
                  </Typography>
                )}
              </div>
              <div className="center">
                <ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCHA_KEY} onChange={handleCaptcha} />
              </div>

              {captachVerified ? (
                <button disabled={captachVerified} className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                  <span className="relative invisible">Register</span>
                </button>
              ) : (
                <button disabled className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border border-gray-500 rounded-lg shadow-md group">
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
                  <NavLink to="/donor/login" className="underline text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 ">
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
