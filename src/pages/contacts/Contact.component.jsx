import { useEffect, useState, useContext } from "react";
import Container from "../../components/container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../../components/header/Header";
import { axios } from "../../lib/axios";
import { Link } from "react-router-dom";
import useImage from "../../hooks/useImage";
import storage from "../../utils/storage";
import { ContactContext } from "../../context/Contact.context";
import { useDebounce } from "../../hooks/useDebounce";

export default function ContactComponent() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [getAvatar] = useImage();
  const { id } = storage.getToken();
  const { setDetails } = useContext(ContactContext);
  const debounceValue = useDebounce(value, 500);
  const getDatas = async () => {
    const response = await axios.get(`/api/employees?query=${debounceValue}`);
    setData(response);
  };
  const singleData = async () => {
    const response = await axios.get(`/api/employees/${id}`);
    setDetails({
      firstName: response[0]?.firstName,
      lastName: response[0]?.lastName,
    });
  };

  useEffect(() => {
    getDatas();
  }, [debounceValue]);
  useEffect(() => {
    singleData();
  }, []);
  console.log("data", data);
  return (
    <div className="bg-discount-gradient w-full pb-96 ">
      <Header />
      <Container>
        <div className="mt-2 mb-6 md:w-1/4 m-auto w-full">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            className="block w-full rounded-md py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:bg-blue-gradient sm:text-sm sm:leading-6"
          />
        </div>
        <ul
          role="list"
          className="divide-y divide-gray-100 md:grid grid-cols-3 md:pt-3">
          {data.length !== 0 &&
            data?.data
              .filter((data) => data.id !== id)
              .map((person) => (
                <li
                  key={person?.id}
                  className="flex justify-between gap-x-6 py-5 md:bg-zinc-800 md:m-9 md:mt-0 md:flex-col md:justify-items-center md:shadow-md md:rounded-md hover:bg-gray-700 hover:rounded px-2 hover:scale-105 ease-out	duration-300 ">
                  <Link to={`/contacts/${person.id}`}>
                    <div className="flex min-w-0 gap-x-4 md:flex-col">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50 md:h-full md:w-full md:rounded-md object-cover"
                        src={getAvatar(person.gender)}
                        alt=""
                      />
                      <div className="min-w-0 flex-auto text-center md:mt-3">
                        <p className="text-sm font-semibold leading-6 text-white">
                          {person?.firstName} {person?.lastName}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-white md:text-center text-left">
                          {person.designation}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <a
                    href={`tel:${person?.contact_number}`}
                    className=" shrink-0 sm:flex sm:flex-col sm:items-end items-center flex md:flex-col md:items-center md:bg-indigo-600 md:rounded-lg md:m-5 ">
                    <div className="flex gap-5 p-3 text-white justify-between md:items-center">
                      <div className="hidden md:block text-lg md:text-sm">
                        Click here to call
                      </div>
                      <div className="cursor-pointer text-lg md:text-sm">
                        <FaPhoneAlt />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
          {data.length === 0 && (
            <>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </ul>
      </Container>
    </div>
  );
}
