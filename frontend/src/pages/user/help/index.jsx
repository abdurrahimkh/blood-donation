import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import React, { useState, Fragment } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import HelpPic from "../../../assets/img/help.png";
import FAQs from "./FAQs";

const Help = () => {
  const [captachVerified, setCaptachVerified] = useState(false);

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

  function handleCaptcha(e) {
    setCaptachVerified(true);
  }
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <section>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 ">
              We’d <span className="text-secondary ">Love</span> to hear from you.
            </h1>
            <p className="mt-3 text-gray-500 ">Please fill out this form or shoot us an email.</p>
            <div className="mt-5">
              <img src={HelpPic} className="w-full" alt="Phone image" />
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-primary text-2xl font-bold font-brooklyn mb-2">Contact us</p>
              <div className="mt-4">
                <Input
                  label="Full Name"
                  error={Boolean(errors?.name)}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "full name is required",
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

              <div className="mt-4">
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

              <div className="w-full mt-4">
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
              <div className="w-full mt-4">
                <Input label="Subject" type="text" error={Boolean(errors?.subject)} {...register("subject")} />
              </div>
              <div className="mt-4">
                <Textarea
                  label="Message"
                  error={Boolean(errors?.message)}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "message is required",
                    },
                  })}
                />
                {errors?.message && (
                  <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors?.message?.message}
                  </Typography>
                )}
              </div>
              <div className="center mt-2">
                <ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCHA_KEY} onChange={handleCaptcha} />
              </div>
              <button
                type="submit"
                disabled={!captachVerified}
                style={{ cursor: captachVerified ? "pointer" : "default" }}
                className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer disabled:border-gray-500"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Send Message</span>
                <span className="relative invisible">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mt-10">
            Frequently Asked <span className="text-secondary ">Questions</span>
          </h1>
          <p className="mt-5 text-center mx-48 mb-5 text-gray-500 ">
            A healthy adult's blood typically contains 10 to 12 water sachets (5.0 to 6.0 litres). <br /> Any significant drop in blood volume necessitates giving the patient some blood from another individual. Blood transfusion is the term used for this. A voluntary non-compensated blood donor is
            someone who freely donates blood.
          </p>
        </div>
        <div className="mx-48">
          <FAQs />
        </div>
      </div>
    </section>
  );
};

export default Help;
