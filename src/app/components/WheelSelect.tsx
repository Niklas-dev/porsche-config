import React from "react";
import Image from "next/image";
import { Check, Settings } from "react-feather";
export default function WheelSelect() {
  return (
    <div className="h-full w-[32rem] bg-[#f5f5f5] rounded-3xl p-6 text-[#10141A] font-semibold relative">
      <h3>Wheel Type</h3>
      <div className="flex flex-row items-center absolute right-2 top-2 gap-1">
        <div className="h-12 w-fit px-6 text-[#10141A] bg-transparent rounded-full flex justify-center items-center font-medium border border-[#d1d1d1]">
          $3.304
        </div>
        <button className="h-12 w-12 text-[#10141A] bg-[#fdfdfd] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
          <Settings color="#353535" />
        </button>
      </div>
      <div className="flex flex-row items-baseline justify-center mt-12 gap-4 ">
        <div className="flex flex-col justify-center items-center relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <Image
            className=""
            src={"/rim1.png"}
            alt="Porsche"
            width={110}
            height={110}
          />
          <p className="text-center flex-wrap">Zoll Carrera Classic</p>
        </div>
        <div className="flex flex-col justify-center items-center relative cursor-pointer">
          <div className="w-full  flex flex-row justify-center absolute -top-3">
            <div className="h-12 w-12  bg-[#10141A]  duration-300 transition-colors rounded-full flex justify-center items-center   border-4 border-white">
              <Check color="#F5F5F5" />
            </div>
          </div>
          <Image
            className=""
            src={"/rim1.png"}
            alt="Porsche"
            width={150}
            height={150}
          />
          <p className="text-center flex-wrap">Zoll RS Spyder</p>
        </div>
        <div className="flex flex-col justify-center items-center relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <Image
            className=""
            src={"/rim1.png"}
            alt="Porsche"
            width={110}
            height={110}
          />
          <p className="text-center flex-wrap">Zoll Carrera S</p>
        </div>
      </div>
    </div>
  );
}
