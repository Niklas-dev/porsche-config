import React from "react";
import { Settings } from "react-feather";
import Image from "next/image";
export default function EngineSelect() {
  return (
    <div className="h-full w-[32rem] bg-[#f5f5f5] rounded-3xl p-6 text-[#10141A] font-semibold relative mt-10">
      <h3>Engine Setup</h3>
      <div className="flex flex-row items-center absolute right-2 top-2 gap-1">
        <div className="h-12 w-fit px-6 text-[#10141A] bg-transparent rounded-full flex justify-center items-center font-medium border border-[#d1d1d1]">
          $12.304
        </div>
        <button className="h-12 w-12 text-[#10141A] bg-[#fdfdfd] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
          <Settings color="#353535" />
        </button>
      </div>
      <div className="flex flex-row items-baseline justify-center mt-12 gap-4 ">
        <div className="flex flex-col justify-center items-center relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <Image
            className=""
            src={"/engine.png"}
            alt="Porsche"
            width={150}
            height={150}
          />
          <p className="text-center flex-wrap">Sport</p>
        </div>
        <div className="flex flex-col justify-center items-center relative cursor-pointer mt-4">
          <Image
            className=""
            src={"/engine.png"}
            alt="Porsche"
            width={300}
            height={300}
          />
          <p className="text-center flex-wrap">Standard</p>
        </div>
        <div className="flex flex-col justify-center items-center relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <Image
            className=""
            src={"/engine.png"}
            alt="Porsche"
            width={150}
            height={150}
          />
          <p className="text-center flex-wrap">Premium</p>
        </div>
      </div>
    </div>
  );
}
