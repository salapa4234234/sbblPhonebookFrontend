import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { axios } from "../../lib/axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from "../../components/header/Header";
import { ContactContext } from "../../context/Contact.context";
import toast from "react-hot-toast";

const EditProfile = () => {
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { setDetails } = useContext(ContactContext);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    desination: "",
    department: "",
    email: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("Successfully updated profile !");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      contact_number: formValues.contact,
      designation: formValues.desination,
      department: formValues.department,
      gender: formValues.gender,
    };
    try {
      const response = await axios.patch(`/api/update_profile/${id}`, data);
      if (response.status === 200) {
        notify();
        getSingleData();
        navigate("/contacts");
        setLoading(false);
      } else {
        setError(response?.msg);
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

  const getSingleData = async () => {
    const response = await axios.get(`/api/employees/${id}`);
    setFormValues({
      firstName: response[0].firstName,
      lastName: response[0].lastName,
      address: response[0].address,
      contact: response[0].contact_number,
      email: response[0].email,
      desination: response[0].designation,
      department: response[0].department,
      gender: response[0].gender,
    });
    setDetails({
      firstName: response[0].firstName,
      lastName: response[0].lastName,
    });
  };
  useEffect(() => {
    getSingleData();
  }, []);
  return (
    <div className=" w-full md:h-screen">
      <Header />
      <Container>
        <div
          className="text-white text-xl px-5 cursor-pointer "
          onClick={handleBack}>
          <IoMdArrowRoundBack />
        </div>
        <div className="flex justify-center items-center md:w-[60%] md:m-auto">
          <form onSubmit={handleUpdate} className="w-full">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8  md:w-[60%] md:m-auto">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gradient">
                  Update your account
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
                      value={formValues?.firstName}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize "
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
                      value={formValues?.lastName}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5  sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-white">
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="given-name"
                      onChange={handleChange}
                      value={formValues?.address}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
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
                      value={formValues?.gender}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
                      className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-sm capitalize">
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
                      value={formValues?.desination}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
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
                      value={formValues?.department}
                      onFocus={() => setError("")}
                      onBlur={() => setError("")}
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
              <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
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
                        value={formValues?.email}
                        onFocus={() => setError("")}
                        onBlur={() => setError("")}
                        required
                        disabled
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm  "
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
                        value={formValues?.contact}
                        onFocus={() => setError("")}
                        onBlur={() => setError("")}
                        required
                        maxLength="10"
                        className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:bg-blue-gradient sm:text-sm sm:leading-6 text-sm capitalize"
                      />
                    </div>
                  </div>
                  <div
                    className={`text-red-500 text-center text-sm ${
                      error.length > 0 ? "block" : "hidden"
                    }`}>
                    {error}
                  </div>
                  <div className="pb-10">
                    <button
                      type="submit"
                      disabled={loading ? true : false}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      {loading ? "Updating..." : "Update Profile"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditProfile;
