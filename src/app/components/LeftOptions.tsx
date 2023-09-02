import React from "react";
import { Key, Edit, PieChart, Aperture } from "react-feather";

export default function LeftOptions() {
  return (
    <div className="flex flex-col gap-2">
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Key color="#353535" />
      </button>
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Edit color="#353535" />
      </button>
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <PieChart color="#353535" />
      </button>
      <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
        <Aperture color="#353535" />
      </button>
    </div>
  );
}
