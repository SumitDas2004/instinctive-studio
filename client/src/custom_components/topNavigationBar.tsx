import { Bell, SearchIcon, SlidersHorizontal } from "lucide-react";
import { HelpCircle } from "@styled-icons/boxicons-regular/HelpCircle";
import { MessageSquareOutline } from "@styled-icons/evaicons-outline/MessageSquareOutline";
import { SidebarTrigger } from "../components/ui/sidebar";

export default function TopNavigationBar({ studentFilterInput }: {studentFilterInput: any}) {
  return (
    <nav className="flex py-4 px-5 lg:justify-between w-full flex-col-reverse lg:flex-row items-center gap-2">
      {/* Student name filter */}
      <span className="relative w-full lg:w-1/2 student-filter" ref={studentFilterInput}>
        <span className="absolute text-gray-500 left-3 top-3">
          <SearchIcon size={16} />
        </span>
      </span>

      {/* Button container */}
      <span className="flex justify-evenly lg:max-w-96 w-full">
        <span className=" md:hidden p-2  rounded-full hover:bg-slate-200 duration-100 cursor-pointer">
          <SidebarTrigger />
        </span>
        {/* Help button */}
        <button className="p-2 rounded-full hover:bg-slate-200 duration-100 cursor-pointer">
          <HelpCircle size={20} className="text-gray-500" />
        </button>

        {/* Message button */}
        <button className="p-2 rounded-full hover:bg-slate-200 duration-100 cursor-pointer">
          <span className="relative">
            <span className="size-2 bg-red-500 inline-block rounded-full absolute top-2 right-0 z-10 border border-white"></span>
            <span className="relative">
              <MessageSquareOutline size={20} className="text-gray-500" />
            </span>
          </span>
        </button>

        {/* Slider button */}
        <button className="p-2 rounded-full hover:bg-slate-200 duration-100 cursor-pointer">
          <SlidersHorizontal size={20} className="text-gray-500" />
        </button>

        {/* Notification button */}
        <button className="p-2 rounded-full hover:bg-slate-200 duration-100 cursor-pointer">
          <span className="relative">
            <span className="size-2 bg-red-500 inline-block rounded-full absolute top-0 right-0 z-10 border border-white"></span>
            <span className="relative">
              <Bell size={20} className="text-gray-500" />
            </span>
          </span>
        </button>

        {/* Profile button */}
        <span className="flex items-center w-max">
          <span className="size-10 overflow-hidden rounded-md mr-5 ml-4">
            <img
              className=" size-full object-cover"
              src="./profile.jpg"
              alt="Not found."
            />
          </span>
          <span className="font-semibold">Sumit Das</span>
        </span>
      </span>
    </nav>
  );
}
