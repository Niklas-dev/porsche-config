import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#E4E4E4] flex flex-col">
      <NavBar />
      <Image
        className=""
        src={"/iris-removebg.png"}
        alt="Porsche"
        width={1000}
        height={1000}
      />
    </main>
  );
}
