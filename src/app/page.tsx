import Image from "next/image";
import NavBar from "./components/NavBar";
import {
  ChevronDown,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "react-feather";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#E4E4E4] flex flex-col">
      <NavBar />
      <div className="flex flex-row justify-center items-center relative mt-16 ">
        <div className="absolute w-full top-1 left-0 text-black px-10 flex flex-row justify-between gap-4">
          <div className="flex flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl font-semibold">Tagra-4</h2>
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
                <span className="text-5xl font-semibold">276.000</span>
              </div>
              <p className="text-lg">+ 54.350 accessories</p>
            </div>
          </div>
        </div>

        <div className="absolute text-black px-10 w-full flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
            <button className="h-12 w-12 text-[#F5F5F5] bg-[#10141A] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#F5F5F5" />
            </button>
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
            <button className="h-12 w-12 text-[#10141A] bg-[#ececec] hover:bg-[#d8d8d8] duration-300 transition-colors rounded-full flex justify-center items-center">
              <Settings color="#353535" />
            </button>
          </div>
        </div>
        <Image
          className=""
          src={"/iris-removebg.png"}
          alt="Porsche"
          width={1100}
          height={1100}
        />
      </div>
      <div className="text-black flex flex-col items-center relative">
        <div className="absolute w-full flex-row flex justify-center -top-24">
          <div className="w-1/2 h-[1px] box2 "></div>
        </div>

        <div className="absolute w-full flex-row flex justify-center -top-6">
          <div className="w-24 h-12 px-2 bg-[#F5F5F5] flex flex-row items-center justify-between rounded-full">
            <ChevronLeft color="#353535" />

            <ChevronRight color="#353535" />
          </div>
        </div>
      </div>
    </main>
  );
}
