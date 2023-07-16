import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useForgetPasswordMutation } from "../api";
import Loader from "./Loader";
const ForgetPassword = () => {
  const [forgetPassword, response] = useForgetPasswordMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    forgetPassword(data);
  };

  useEffect(() => {
    const handleResponse = () => {
      if (response?.data) {
        toast.success(response?.data?.message);
      } else if (response?.error) {
        toast.error(response?.error?.data);
      }
    };
    handleResponse();
  }, [response]);

  return (
    <section className="mt-4 size-page">
      <div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-20 mx-32 my-0 md:my-20 bg-white border shadow rounded-lg">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Reset Password</h2>
            <p className="mt-2 text-base text-gray-600">Fill up the form to reset the password</p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="block w-full py-3 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      required
                    />
                  </div>
                </div>
                <p className="mt-2 text-base text-gray-600">
                  Not registered yet?
                  <Link to="/donor/register" title="" className="pl-1 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                    Register Now
                  </Link>
                </p>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-2 mt-3 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-secondary focus:outline-none hover:opacity-80 focus:opacity-80 disabled:bg-gray-200"
                  >
                    {response?.isLoading ? <Loader size="5" /> : "Reset"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
