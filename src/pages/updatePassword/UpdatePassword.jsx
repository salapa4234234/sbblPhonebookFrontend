import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { axios } from "../../lib/axios";
import storage from "../../utils/storage";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from "../../components/header/Header";

const UpdatePassword = () => {
  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     const data = {
  //       email: formValues.email,
  //       password: formValues.password,
  //     };
  //     const response = await axios.post(`/api/login`, data);
  //     if (response.status === 200) {
  //       storage.setToken(response);
  //       navigate("/contacts");
  //       console.log("Success", response);
  //     } else {
  //       setError(response.message);
  //     }
  //   };
  const handleBack = () => {
    navigate("/contacts");
  };
  return (
    <div className="bg-discount-gradient w-full overflow-hidden h-screen">
      <Header />
      <Container>
        <div
          className="text-white text-xl px-5 cursor-pointer"
          onClick={handleBack}>
          <IoMdArrowRoundBack />
        </div>
        <div className="flex justify-center items-center">
          <form>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gradient">
                  Update your a password!
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white">
                      New Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium leading-6 text-white">
                        Confirm Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="confirmPassword"
                        required
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Update your password{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdatePassword;
