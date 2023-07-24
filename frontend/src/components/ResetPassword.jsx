import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../api";
import Loader from "./Loader";
const ResetPassword = () => {
  const { token } = useParams();
  const [resetPassword, response] = useResetPasswordMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    resetPassword({ data, token });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleResponse = () => {
      if (response?.data) {
        toast.success(response?.data?.message);
        navigate("/donor/login");
      } else if (response?.error) {
        toast.error(response?.error?.data?.error);
      }
    };
    handleResponse();
  }, [response]);

  return (
    <section className="size-page">
      <div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-20 mx-32 my-0 md:my-20 bg-white border shadow rounded-lg">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Reset Password</h2>
            <p className="mt-2 text-base text-gray-600">Fill up the form to reset the password</p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div>
                <div className="flex items-center justify-between"></div>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                      />
                    </svg>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter new password"
                    className="block w-full py-2 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    required
                  />
                </div>
                <div className="mt-5">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-secondary focus:outline-none hover:opacity-80 focus:opacity-80 disabled:bg-gray-200">
                    {response?.isLoading ? <Loader size="5" /> : "Confirm"}
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

export default ResetPassword;
