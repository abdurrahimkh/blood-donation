import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EmailVerificationStatus = React.memo(() => {
  const { token } = useParams();
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/verify-email/${token}`, { method: "post" });
      const rjson = await response.json();
      console.log(rjson);

      setLoading(false);
      if (rjson.error) {
        setValid(false);
      } else {
        setValid(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div>
      <div className="size-page relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
        {!loading && (
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[30px] font-bold text-zinc-800">{valid ? "Your email has been verified" : "Something Went Wrong"}</h2>
            <div className="center">
              <img src={`/icons/${valid ? "check-mark.png" : "cancel.png"}`} alt="icon" className="h-32" />
            </div>
            {valid && (
              <p className="text-md mt-5 font-medium">
                Click here to go to{" "}
                <Link className="text-blue-500 underline text-lg" to="/donor/login">
                  Login
                </Link>
              </p>
            )}
          </div>
        )}
        {loading && (
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[30px] font-bold text-zinc-800">Please Wait</h2>
            <div className="center">
              <img src="/icons/sand-clock.png" alt="icon" className="h-32" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default EmailVerificationStatus;
