import React from "react";
import Image from "next/image";
import { Settings, Layout } from "react-feather";
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
      <div className="flex flex-row items-center gap-2">
        <button className="h-12 w-32 bg-[#10141A] text-[#F5F5F5] rounded-full font-medium">
          Models
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Services
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Experience
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Shop
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent rounded-full font-medium">
          Purchase
        </button>
      </div>

      <div className="flex flex-row items-center gap-2">
        <button className="h-12 w-12 text-[#10141A] bg-[#F5F5F5] rounded-full flex justify-center items-center">
          <Layout color="#353535" />
        </button>
        <button className="h-12 w-32 text-[#F5F5F5] bg-[#10141A] rounded-full font-medium">
          Test
        </button>
        <button className="h-12 w-12 text-[#10141A] bg-[#F5F5F5] rounded-full  flex justify-center items-center">
          <Settings color="#353535" />
        </button>
      </div>
    </div>
  );
}
