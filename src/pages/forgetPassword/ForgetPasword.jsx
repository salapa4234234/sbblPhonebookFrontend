/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const ForgetPasword = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const data = {
    email: email,
  };
  const notify = () =>
    toast.success("Successfully sent emaily. Please check your email box!");

  const handleForget = async (e) => {
    e.preventDefault();
    const response = await axios.patch("/api/forget_password", data);
    if (response.status === 200) {
      notify();
    } else {
      setErr(response.message);
    }
  };
  return (
    <div className="h-screen">
      <main
        id="content"
        role="main"
        className="w-full  max-w-md mx-auto p-6 h-full">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium px-1"
                  to="/">
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleForget}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        required
                        aria-describedby="email-error"
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setErr("")}
                        onBlur={() => setErr("")}
                      />
                    </div>
                    <div
                      className={`text-red-500 text-center text-sm ${
                        err.length > 0 ? "block" : "hidden"
                      }`}>
                      {err}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPasword;
