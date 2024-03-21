import Container from "../../components/container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

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
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export default function ContactComponent() {
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
            className="block w-full rounded-md py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:bg-blue-gradient sm:text-sm sm:leading-6"
          />
        </div>
        <ul
          role="list"
          className="divide-y divide-gray-100 md:grid grid-cols-3 md:pt-3">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5 md:bg-zinc-800 md:m-9 md:mt-0 md:flex-col md:justify-items-center md:shadow-md md:rounded-md hover:bg-gray-700 hover:rounded px-2 hover:scale-105 ease-out	duration-300 ">
              <Link to="/contacts/1">
                <div className="flex min-w-0 gap-x-4 md:flex-col">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 md:h-full md:w-full md:rounded-md object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto text-center">
                    <p className="text-sm font-semibold leading-6 text-white">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-white">
                      {person.role}
                    </p>
                  </div>
                </div>
              </Link>
              <a
                href="tel:9803967077"
                className=" shrink-0 sm:flex sm:flex-col sm:items-end items-center flex md:flex-col md:items-center md:bg-indigo-600 md:rounded-lg md:m-5 ">
                <div className="flex gap-5 p-3 text-white justify-between">
                  <div className="hidden md:block text-lg">
                    Click here to call
                  </div>
                  <div className="cursor-pointer text-lg">
                    <FaPhoneAlt />
                  </div>
                  {/* <div className="cursor-pointer text-lg">
                    <FaEye />
                  </div> */}
                </div>
              </a>
            </li>
          ))}
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
        </ul>
      </Container>
    </div>
  );
}
