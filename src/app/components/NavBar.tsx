import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center h-20 bg-transparent px-10">
      <Image
        className="h-11 w-9"
        src={"/logo.png"}
        alt="Porsche"
        width={500}
        height={500}
      />
      <div className="flex flex-row items-center">
        <button className="h-12 w-32 bg-[#10141A] rounded-full">Test</button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Test
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Test
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Test
        </button>
      </div>

      <div className="flex flex-row items-center">
        <button className="h-12 w-12 text-[#10141A] bg-white rounded-full font-medium">
          I
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Test
        </button>
        <button className="h-12 w-12 text-[#10141A] bg-white rounded-full font-medium">
          I
        </button>
      </div>
    </div>
  );
}
