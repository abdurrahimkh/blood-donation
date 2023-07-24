import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Input, Spinner, Textarea, Typography } from "@material-tailwind/react";
import React, { useState, Fragment, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import HelpPic from "../../../assets/img/help.png";
import FAQs from "./FAQs";
import Animation from "../../../components/Animation";
import Banner from "./Banner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { usePostMessageMutation } from "../../../api";

const Help = () => {
  const [captachVerified, setCaptachVerified] = useState(false);
  const [post, response] = usePostMessageMutation();
  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .matches(/^\d{11}$/, "Invalid phone number")
      .required("Phone number is required"),
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[^\d]+$/, "Invalid Name"),
    message: yup.string().required("Message is required"),
    subject: yup.string().required("Subject is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  function handleCaptcha(e) {
    setCaptachVerified(true);
  }
  function onSubmit(data) {
    if (!captachVerified) {
      toast.error("Please fill the captcha");
    } else {
      post({ ...data, mobile_number: data.phone });
      reset();
    }
  }

  useEffect(() => {
    if (response?.error) {
      toast.error(response?.error?.data?.error);
    } else if (response?.data) {
      toast.success(response?.data?.message);
    }
  }, [response]);
  return (
    <>
      <Banner image={"contact-us.jpg"} title={"Contact Us"} subtitle={"Get in touch with us"} />
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
                  <Input label="Full Name" error={Boolean(errors?.name)} {...register("name")} />
                  {errors?.name && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.name?.message}
                    </Typography>
                  )}
                </div>

                <div className="mt-4">
                  <Input label="Phone" type="text" error={Boolean(errors?.phone)} {...register("phone")} />
                  {errors?.phone && (
                    <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors?.phone?.message}
                    </Typography>
                  )}
                </div>

                <div className="w-full mt-4">
                  <Input label="Email" type="email" error={Boolean(errors?.email)} {...register("email")} />
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
                  <Textarea label="Message" error={Boolean(errors?.message)} {...register("message")} />
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
                {response?.isLoading ? (
                  <div className="mt-3 relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md">
                    <Spinner color="red" />
                  </div>
                ) : (
                  <button
                    type="submit"
                    style={{ cursor: captachVerified ? "pointer" : "default" }}
                    className="mt-3  relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:cursor-pointer disabled:border-gray-500"
                  >
                    <span className="absolute cursor-pointer inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Send Message</span>
                    <span className="relative invisible">Send Message</span>
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mt-10">
              Frequently Asked <span className="text-secondary ">Questions</span>
            </h1>
            <p className="mt-5 text-center mx-5 md:mx-48 mb-5 text-gray-500 ">
              A healthy adult's blood typically contains 10 to 12 water sachets (5.0 to 6.0 litres). <br /> Any significant drop in blood volume necessitates giving the patient some blood from another individual. Blood transfusion is the term used for this. A voluntary non-compensated blood donor is
              someone who freely donates blood.
            </p>
          </div>
          <Animation>
            <div className="mx-5 md:mx-48">
              <FAQs />
            </div>
          </Animation>
        </div>
      </section>
    </>
  );
};

export default Help;
