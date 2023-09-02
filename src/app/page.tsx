import Image from "next/image";
import NavBar from "./components/NavBar";
import InfoBar from "./components/InfoBar";
import BodySelect from "./components/BodySelect";
import WheelSelect from "./components/WheelSelect";
import EngineSelect from "./components/EngineSelect";
import LeftOptions from "./components/LeftOptions";
import RightOptions from "./components/RightOptions";
import ModelInformations from "./components/ModelInformations";
import CarSlider from "./components/CarSlider";

export default function Home() {
  return (
    <main className="w-screen h-fit bg-[#E4E4E4] flex flex-col pb-20">
      <NavBar />
      <div className="flex flex-row justify-center items-center relative mt-16 ">
        <ModelInformations />

        <div className="absolute text-black px-10 w-full flex flex-row justify-between">
          <LeftOptions />
          <RightOptions />
        </div>
        <Image
          className=""
          src={"/iris-removebg.png"}
          alt="Porsche"
          width={1100}
          height={1100}
        />
      </div>
      <CarSlider />
      <div className="w-full h-10 flex flex-col justify-center items-center  mt-16 gap-1">
        <div className="bg-[#cccccc] w-12 h-[2px]"></div>
        <div className="bg-[#cccccc] w-20 h-[2px]"></div>
      </div>
      <div className="h-80 flex flex-row justify-center gap-6 mt-0">
        <BodySelect />
        <WheelSelect />
        <EngineSelect />
      </div>
      <InfoBar />
    </main>
  );
}
