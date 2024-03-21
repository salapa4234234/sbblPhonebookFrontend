import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";

const PopoverComponent = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none p-3 m-3"
        aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">
            Description
          </h1>
          <p>
            This only for oficialy use.Don&apos;t use for any other purpose.If
            you found any froudl,let us know.
          </p>
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

export default PopoverComponent;
