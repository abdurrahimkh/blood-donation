import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResendEmailMutation } from "../api";
import { toast } from "react-hot-toast";

const VerifyEmail = () => {
  const { state } = useLocation();
  const [resend, response] = useResendEmailMutation();
  console.log(response);

  function handleResend() {
    resend(state.email);
  }

  useEffect(() => {
    if (response?.error) {
      toast.error(response?.error?.data?.error);
    } else if (response?.data) {
      toast.success(response?.data?.message);
    }
  }, [response]);

  return (
    <div className="size-page relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
      <div className="max-w-xl px-5 text-center">
        <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Verify your Email</h2>
        <p className="mb-2 text-lg text-zinc-500">
          We are glad, that you’re with us ? We’ve sent you a verification link to the email <span className="font-medium text-primary">{state.email}</span>
        </p>
        <button onClick={handleResend} className="mt-3 inline-block w-96 rounded bg-secondary px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-red-800">
          Resend
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
