/* eslint-disable react/prop-types */
import * as Avatar from "@radix-ui/react-avatar";

const Avatars = ({ url }) => {
  return (
    <div className="flex gap-5 cursor-pointer">
      <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
        <Avatar.Image
          className="h-full w-full rounded-[inherit] object-cover"
          src={url}
          alt="Pedro Duarte"
        />
      </Avatar.Root>
    </div>
  );
};

export default Avatars;
