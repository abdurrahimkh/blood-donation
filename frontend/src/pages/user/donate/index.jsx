import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Illustration from "../../../assets/gif/donor.gif";
import Banner from "../help/Banner";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { usePostDonationMutation } from "../../../api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Spinner, Typography } from "@material-tailwind/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TimePicker } from "@mui/x-date-pickers";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

const Donate = () => {
  const user = useSelector((state) => state.authReducer.activeUser);
  const [post, response] = usePostDonationMutation();

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
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
    address: yup.string().required("Address is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      bloodGroup: "",
      phone: "",
      date: "",
      time: "",
      address: "",
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    post({ ...data, blood_group: data.bloodGroup, mobile_number: data.phone });

    reset();
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
      <Banner image="donate.jpg" title="Give Hope" subtitle="Help Those in Need" />
      <section className="container px-6   mx-auto lg:h-[91vh] py-[6rem] ">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg space-y-4">
              <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 dark:text-white lg:text-5xl">
                Become a <span className="text-secondary ">Donor</span>
              </h1>
              <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 dark:text-white lg:text-5xl">
                Start saving <span className="text-secondary ">Lives</span>
              </h1>

              <p className="pt-5 pb-3 text-gray-600 dark:text-gray-400">
                By becoming a donor, you become a beacon of hope for those in dire need of blood transfusions. Countless lives can be transformed and saved through your selfless act of giving. Remember, your simple act of donating blood can be a lifeline for accident victims, individuals undergoing
                complex surgeries, and those battling life-threatening conditions.
              </p>
              {!user && (
                <Link to="/donor/register" className="mt-6 relative w-[15rem] py-1.5 inline-flex items-center justify-center p-4 overflow-hidden font-medium text-secondary transition duration-300 ease-out border border-secondary rounded-lg shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-secondary transition-all duration-300 transform group-hover:translate-x-full ease">Register Now</span>
                  <span className="relative invisible">Register Now</span>
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-[50rem] lg:max-w-2xl" src={Illustration} alt="Catalogue-pana.svg" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 min-h-96 mb-14 ">
        <div className="px-4 py-16 mx-auto bg-white rounded-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-16">
          <h1 className="text-3xl font-brooklyn font-semibold text-gray-800 text-center mb-10">
            Ready For <span className="text-secondary ">Donation</span>
          </h1>
          <p className="px-44 font-brooklyn font-semibold text-gray-800 text-center mb-10">Please take a moment to fill out the form below, indicating your willingness to donate blood on a specific date and time. Your compassion and willingness to help are deeply appreciated.</p>

          <div className="flex">
            <div className="lg:py-6 lg:mr-28 lg:ml-20">
              <div className="p-4 py-6 rounded-lg bg-white w-[28rem] md:p-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <Input label="Donor Name" type="text" className="py-[1.3rem]" error={Boolean(errors?.name)} {...register("name")} />
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
                  <div className="mb-3">
                    <Input label="Phone" type="text" className="h-[2.7rem]" error={Boolean(errors?.phone)} {...register("phone")} />
                    {errors?.phone && (
                      <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                        <InformationCircleIcon className="w-4 h-4 -mt-px" />
                        {errors?.phone?.message}
                      </Typography>
                    )}
                  </div>
                  <div className="mb-3 flex gap-3">
                    <Controller
                      name="date"
                      control={control}
                      defaultValue={null}
                      render={({ field, ...props }) => {
                        return (
                          <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                              onChange={(date) => field.onChange(date)}
                              label="Date"
                              sx={{
                                "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 14px",
                                },
                                "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                                  top: "-5px",
                                },
                              }}
                            />
                          </LocalizationProvider>
                        );
                      }}
                    />

                    <Controller
                      name="time"
                      control={control}
                      defaultValue={null}
                      render={({ field, ...props }) => {
                        return (
                          <LocalizationProvider dateAdapter={AdapterMoment}>
                            <TimePicker
                              onChange={(time) => field.onChange(time)}
                              label="Time"
                              sx={{
                                "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 14px",
                                },
                                "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                                  top: "-5px",
                                },
                              }}
                            />
                          </LocalizationProvider>
                        );
                      }}
                    />
                  </div>
                  <div className="flex gap-20">
                    {errors?.date && (
                      <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mb-2">
                        <InformationCircleIcon className="w-4 h-4 -mt-px" />
                        {errors?.date?.message}
                      </Typography>
                    )}
                    {errors?.time && (
                      <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mb-2">
                        <InformationCircleIcon className="w-4 h-4 -mt-px" />
                        {errors?.time?.message}
                      </Typography>
                    )}
                  </div>
                  <div className="mb-3">
                    <Input label="Address" type="text" error={Boolean(errors?.address)} {...register("address")} />

                    {errors?.address && (
                      <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-3">
                        <InformationCircleIcon className="w-4 h-4 -mt-px" />
                        {errors?.address?.message}
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

export default Donate;
