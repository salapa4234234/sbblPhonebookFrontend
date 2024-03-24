/* eslint-disable react/prop-types */
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import storage from "../../utils/storage";

const PopoverComponent = ({ children, id }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    storage.clearToken();
    navigate("/");
  };
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none p-3 m-3"
          aria-label="Update dimensions">
          {children}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}>
          <div className="flex flex-col gap-2.5">
            <Link className="pt-4" to={`/edit_profile/${id}`}>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-2/4 m-auto">
                Edit Profile
              </button>
            </Link>
            <div
              className="text-sm  float-start cursor-pointer mt-2"
              onClick={handleLogOut}>
              <div className="font-semibold text-indigo-600 hover:text-indigo-500 text-center">
                Logout
              </div>
            </div>
          </div>
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
            aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverComponent;
