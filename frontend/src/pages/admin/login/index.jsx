import React, { useEffect, useState } from "react";
import { Input, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import ReCAPTCHA from "react-google-recaptcha";
import { useLoginMutation, useResendEmailMutation } from "../../../api/index";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../../redux/reducers/auth";

const AdminLogin = () => {
  const [login, response] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    login(data);
  }

  console.log(response);

  useEffect(() => {
    if (response?.error) {
      toast.error(response?.error?.data?.error);
    } else if (response?.data?.user?.is_admin === true) {
      navigate("/admin/donors");
      dispatch(setActiveUser({ ...response?.data.user, token: response?.data.token }));
      toast.success("Login Success");
    }
  }, [response]);

  return (
    <section className="h-screen md:min-h-[91vh] center">
      <div className="md:w-8/12 lg:ml-6 lg:w-4/12 border border-gray-300 bg-white p-4 shadow rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl mb-5 text-center">Admin</h1>
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
                    message: "Username is required",
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
          <button type="submit" className="mt-3 bg-secondary text-white relative w-full inline-flex items-center justify-center p-4  py-2 overflow-hidden font-medium transition duration-300 ease-out border border-secondary rounded-lg shadow-md group hover:bg-opacity-50">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
