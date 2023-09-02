import React from "react";
import { Tool, Settings, Speaker, Map } from "react-feather";

export default function RightOptions() {
  return (
    <div className="flex flex-col gap-2">
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Tool color="#353535" />
      </button>
      <button className="h-12 w-12 text-[#F5F5F5] bg-[#10141A] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Settings color="#F5F5F5" />
      </button>
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Map color="#353535" />
      </button>
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Speaker color="#353535" />
      </button>
    </div>
  );
}
