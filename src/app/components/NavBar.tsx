import React from "react";
import Image from "next/image";
import { Settings, Layout, Send } from "react-feather";
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
        <button className="h-12 w-32 text-[#F5F5F5] bg-[#10141A] hover:bg-[#202020] duration-300 transition-colors rounded-full font-medium">
          Models
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full font-medium">
          Services
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full font-medium">
          Experience
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full font-medium">
          Shop
        </button>
        <button className="h-12 w-32 text-[#10141A] bg-transparent hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full font-medium">
          Purchase
        </button>
      </div>

      <div className="flex flex-row items-center gap-4">
        <button className="h-12 w-12 text-[#10141A] bg-[#F5F5F5] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
          <Layout color="#353535" />
        </button>
        <button className="h-12 w-56 text-[#F5F5F5] bg-[#10141A] hover:bg-[#202020] duration-300 transition-colors rounded-full font-medium flex flex-row items-center justify-center gap-4">
          <Send size={18} color="#F5F5F5" />
          Contact Dealer
        </button>
        <button className="h-12 w-12 text-[#10141A] bg-[#F5F5F5] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full  flex justify-center items-center">
          <Settings color="#353535" />
        </button>
      </div>
    </div>
  );
}
