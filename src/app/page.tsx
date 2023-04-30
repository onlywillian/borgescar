export const metadata = {
  title: "Borges Car",
};

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";

import carImage from "../../public/assets/cars/aston.jpg";

export default function Home() {
  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <div className="w-full h-full bg-gray-200 flex">
          <div className="w-screen h-full bg-gray-500"></div>
          <div className="w-screen h-full bg-gray-200"></div>
          <div className="w-screen h-full bg-gray-200"></div>
          <div className="w-screen h-full bg-gray-900"></div>
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <div className="h-full bg-gray-200 w-full">
          <Image src={carImage} alt="Aston Martin" className="w-full h-full" />
        </div>
        <Footer />
      </main>
    </>
  );
}
