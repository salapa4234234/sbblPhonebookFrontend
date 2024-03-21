import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];
const PersonComponent = () => {
  return (
    <div className="bg-discount-gradient w-full h-screen overflow-hidden ">
      <Header />
      <Container>
        <ul
          role="list"
          className="divide-y divide-gray-100  md:pt-3 flex items-center justify-center">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex flex-col justify-between gap-x-6 py-5  md:m-9 md:mt-0 md:flex-col md:justify-items-center  px-2 hover:scale-105 ease-out	duration-300 md:w-1/3 w-4/5 m-auto ">
              <div className=" min-w-0">
                <img
                  className=" flex-none  bg-gray-50 h-full w-full rounded-md object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto text-center my-4 ">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-white">
                    {person.role}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <a
                  href="tel:9803967077"
                  className=" shrink-0 sm:flex sm:flex-col sm:items-end items-center flex md:flex-col md:items-center bg-indigo-600 rounded-lg  ">
                  <div className="flex gap-5 p-3 text-white justify-between items-center">
                    <div className="cursor-pointer text-lg">
                      <FaPhoneAlt />
                    </div>
                  </div>
                </a>
                <a
                  href="tel:9803967077"
                  className=" shrink-0 sm:flex sm:flex-col sm:items-end items-center flex md:flex-col md:items-center bg-indigo-600 rounded-lg  ">
                  <div className="flex gap-5 p-3 text-white justify-between items-center">
                    <div className="cursor-pointer text-lg">
                      <MdOutlineMailOutline />
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <h3 className="text-white text-center p-3 mt-4">Details</h3>
                <div className="p-[0.2px] bg-slate-50"></div>
                <div className="text-center mt-3">
                  <p className="text-white text-sm">Address : Khotang</p>
                  <p className="text-white text-sm">Department : IT</p>
                </div>
              </div>
            </li>
          ))}
          {/* <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
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
          </div> */}
        </ul>
      </Container>
    </div>
  );
};

export default PersonComponent;
