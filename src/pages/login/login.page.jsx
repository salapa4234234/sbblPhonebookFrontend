import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import { axios } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import storage from "../../utils/storage";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const notify = () => toast.success("Successfully login !");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: formValues.email,
      password: formValues.password,
    };
    const response = await axios.post(`/api/login`, data);
    if (response.status === 200) {
      storage.setToken(response);
      navigate("/contacts");
      notify();
    } else {
      setError(response.message);
    }
  };
  return (
    <div className="w-full h-screen ">
      <Container>
        <div className="flex justify-center items-center">
          <form onSubmit={handleLogin} className="w-full">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className=" w-auto"
                  src="https://salapabikasbank.com.np/them_img/22-Dec-2020-10-12-36logo-main.png"
                  alt="Your Company"
                />
                <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gradient">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        onChange={handleChange}
                        onFocus={() => setError("")}
                        onBlur={() => setError("")}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={handleChange}
                        onFocus={() => setError("")}
                        onBlur={() => setError("")}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div
                    className={`text-red-500 text-center text-sm ${
                      error.length > 0 ? "block" : "hidden"
                    }`}>
                    {error}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Sign in
                    </button>
                  </div>
                </div>
                <div className="text-sm mt-6 float-start">
                  <Link
                    to="/signup"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Sign Up
                  </Link>
                </div>
                <div className="text-sm mt-6 float-end">
                  <Link
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    to="/forget-password">
                    Forgot password ?
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
