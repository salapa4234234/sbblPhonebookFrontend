import Container from "../../components/container/Container";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

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
      <Container>
        <ul
          role="list"
          className="divide-y divide-gray-100 md:grid grid-cols-3 md:mt-3">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5 md:bg-zinc-800 md:m-9 md:mt-0 md:flex-col md:justify-items-center md:shadow-md md:rounded-md hover:bg-gray-700 hover:rounded px-2 hover:scale-105 ease-out	duration-300 ">
              <div className="flex min-w-0 gap-x-4 md:flex-col">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50 md:h-full md:w-full md:rounded-md object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {person.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-white">
                    {person.role}
                  </p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end items-center flex md:flex-col">
                <div className="flex gap-3 p-3 text-white">
                  <div className="cursor-pointer text-lg">
                    <FaPhoneAlt />
                  </div>
                  <div className="cursor-pointer text-lg">
                    <FaEye />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
