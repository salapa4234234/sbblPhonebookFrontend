import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { axios } from "../../lib/axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";

const ForgetUpdatePassword = () => {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email } = useParams();
  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\\[\]:;<>,.?/~]).{6,}$/;

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };
  const notify = () =>
    toast.success("Successfully updated password. Please login again !");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsValid(isValidPassword(formValues?.password));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formValues.password !== formValues.confirmPassword) {
      setError("Password did not match with confirm password !");
      setLoading(false);
      return;
    }

    const data = {
      newPassword: formValues.password,
    };

    try {
      const response = await axios.patch(
        `/api/forget_password/${getEmail(email)}`,
        data
      );
      if (response.status === 200) {
        navigate("/");
        notify();
        setLoading(false);
      } else {
        setError(response.message);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(err?.message);
      console.log("Error", err);
    }
  };
  const handleBack = () => {
    navigate("/contacts");
  };
  const getEmail = (emailParam) => {
    // Extract email from email=xxxxx format
    const startIndex = emailParam.indexOf("=") + 1;
    return emailParam.substring(startIndex);
  };
  return (
    <div className="w-full h-screen ">
      <Container>
        <div
          className="text-white text-xl px-5 cursor-pointer"
          onClick={handleBack}>
          <IoMdArrowRoundBack />
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleLogin} className="w-full">
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
                        onFocus={() => {
                          setError("");
                        }}
                        onBlur={() => {
                          setError("");
                        }}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
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
                        onFocus={() => setError("")}
                        onBlur={() => {
                          setError("");
                        }}
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`text-red-500 text-center text-sm  pt-4 ${
                    error.length > 0 ? "block" : "hidden"
                  }`}>
                  {error}
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {loading ? "Updating password...." : "Forget your password"}
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

export default ForgetUpdatePassword;
