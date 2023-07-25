"use client";
import React, { useState } from "react";
import { Check } from "react-feather";
export default function InfoBar() {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`absolute h-32 bottom-0 w-full bg-[#F5F5F5] text-black py-2 px-4 ${
        !show && "hidden"
      }`}
    >
      <h3 className="text-xl font-bold text-center">Info / Disclaimer</h3>
      <p className="text-lg text-center">
        This page is not related to any brand. This is a react implementation
        created by{" "}
        <a
          className="text-black font-semibold"
          target="_blank"
          href="https://github.com/Niklas-dev"
        >
          @Niklas-dev
        </a>{" "}
        of the design by{" "}
        <a
          className="text-black font-semibold"
          target="_blank"
          href="https://dribbble.com/RonDesignLab"
        >
          @RonDesignLab
        </a>
        .
      </p>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => setShow(false)}
          className="flex flex-row justify-center items-center bg-[#10141A] text-[#F5F5F5] hover:bg-[#202020] duration-300 transition-colors h-10 px-4 rounded-full gap-2 mt-2"
        >
          Noticed
          <Check />
        </button>
      </div>
    </div>
  );
}
