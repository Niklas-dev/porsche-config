import React from "react";
import { ChevronDown } from "react-feather";

export default function ModelInformations() {
  return (
    <div className="absolute w-full top-1 left-0 text-black px-10 flex flex-row justify-between gap-4">
      <div className="flex flex-row">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-semibold">Turbo S</h2>
          <p className="text-lg">911 Carrera - Personal Edition</p>
        </div>
        <div>
          <button className="h-12 w-12 text-[#10141A] bg-[#F5F5F5] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
            <ChevronDown color="#353535" />
          </button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-end">
            <span className="text-2xl">$</span>
            <span className="text-5xl font-semibold">246.000</span>
          </div>
          <p className="text-lg">+ 54.350 accessories</p>
        </div>
      </div>
    </div>
  );
}
