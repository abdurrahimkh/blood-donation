import React, { useState } from "react";
import { Input, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [captachVerified, setCaptachVerified] = useState(false);

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
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  function handleCaptcha(e) {
    setCaptachVerified(true);
  }
  return (
    <section>
      <div className="container px-6 h-[90vh]">
        <div className="g-6 flex gap-5 h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src="/illu1.png" className="w-full" alt="Phone image" />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-2xl mb-5 text-center">Sign In</h1>
              <div className="flex gap-3">
                <div className="w-full mb-6 ">
                  <Input
                    label="Username"
                    type="text"
                    className="py-[1.3rem]"
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
              </div>

              <div className="mb-2">
                <Input
                  label="Password"
                  type="password"
                  className="py-[1.3rem]"
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
              <div className="mb-5">
                <NavLink to="/forget-password" className="underline text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 ">
                  Forgot Password?
                </NavLink>
              </div>
              <div className="center">
                <ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCHA_KEY} onChange={handleCaptcha} />
              </div>

              {captachVerified ? (
                <button disabled={captachVerified} className="mt-6 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                  <span className="relative invisible">Login</span>
                </button>
              ) : (
                <button disabled className="mt-6 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border border-gray-500 rounded-lg shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                  <span className="relative invisible">Login</span>
                </button>
              )}
              <p className="mt-3 text-center">
                New to Blood Donation?{" "}
                <span>
                  <NavLink to="/donor/register" className="underline text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 ">
                    Join
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

export default Login;
