import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    desination: "",
    department: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const notify = () =>
    toast.success("Sucessfuly sent email. Please verify email !");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\\[\]:;<>,.?/~]).{6,}$/;

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setIsValid(isValidPassword(formValues?.password));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formValues.password !== formValues.confirmPassword) {
      setErr("Password did not match with confirm password !");
      setLoading(false);
      return;
    }
    const data = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      contact_number: formValues.contact,
      email: formValues.email,
      designation: formValues.desination,
      department: formValues.department,
      gender: formValues.gender,
      password: formValues.password,
    };
    try {
      const response = await axios.post(`/api/register`, data);
      if (response.status === 200) {
        navigate("/");
        notify();
        setLoading(false);
      } else {
        setErr(response?.msg);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setErr(err?.message);
      console.log("err", err);
    }
  };
  return (
    <div className=" w-full">
      <Container>
        <div className="flex justify-center items-center md:w-[60%] md:m-auto ">
          <form onSubmit={handleRegister} className="w-full">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8 md:w-[60%] md:m-auto">
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
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5  sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5  sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white">
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="first-name"
                      autoComplete="given-name"
                      onChange={handleChange}
                      placeholder="Write your branch address"
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-white">
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-sm capitalize ">
                      <option>Select a gender</option>
                      <option>M</option>
                      <option>F</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5  sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-white">
                    Designation
                  </label>
                  <div className="mt-2">
                    <select
                      id="desination"
                      name="desination"
                      autoComplete="desination"
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-sm capitalize">
                      <option>Select a desination</option>
                      <option>CEO</option>
                      <option>Manager</option>
                      <option>Officer</option>
                      <option>Supervisor</option>
                      <option>Asistant</option>
                      <option>Messanger</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-white">
                    Department
                  </label>
                  <div className="mt-2">
                    <select
                      id="department"
                      name="department"
                      autoComplete="department"
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-sm capitalize">
                      <option>Select a department</option>
                      <option>IT</option>
                      <option>Teller</option>
                      <option>Coporate</option>
                      <option>CSD</option>
                      <option>MF</option>
                      <option>BM</option>
                      <option>Loan</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div className="space-y-6">
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
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white">
                      Contact information
                    </label>
                    <div className="mt-2">
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        autoComplete="contact"
                        onChange={handleChange}
                        required
                        maxLength="10"
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm"
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
                        onChange={handleChange}
                        autoComplete="current-password"
                        onFocus={() => setErr("")}
                        onBlur={() => setErr("")}
                        required
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm"
                      />
                    </div>
                  </div>
                  <div
                    className={`text-red-500 text-center text-sm ${
                      isValid ? "hidden" : "block"
                    }`}>
                    Password must contain at least 6 characters including at
                    least one uppercase letter, one lowercase letter, one digit,
                    and one special character
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white">
                        Confirm Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        onFocus={() => setErr("")}
                        onBlur={() => setErr("")}
                        required
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm"
                      />
                    </div>
                  </div>
                  <div
                    className={`text-red-500 text-center text-sm ${
                      err && err?.length > 0 ? "block" : "hidden"
                    }`}>
                    {err && err}
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>
                </div>
                <div className="text-sm mt-6 float-end pb-14">
                  <Link
                    to="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Already exists account ?
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

export default SignupPage;
