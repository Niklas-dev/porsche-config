import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function CarSlider() {
  return (
    <div className="text-black flex flex-col items-center relative">
      <div className="absolute w-full flex-row flex justify-center -top-24">
        <div className="w-1/2 h-[1px] box2 "></div>
      </div>

      <div className="absolute w-full flex-row flex justify-center -top-6">
        <div className="w-24 h-12 px-2 bg-[#f0f0f0] flex flex-row items-center justify-between rounded-full cursor-move">
          <ChevronLeft
            className="hover:scale-110 transition-transform cursor-pointer"
            color="#353535"
          />

          <ChevronRight
            className="hover:scale-110 transition-transform cursor-pointer"
            color="#353535"
          />
        </div>
      </div>
    </div>
  );
}
