"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";

import carImage from "../../public/assets/cars/aston.jpg";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);

  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <div className="flex h-full transition-transform duration-300 overflow-hidden gap-10 relative justify-center">
            <div className="w-2/3 absolute flex-shrink-0 -left-1/2 opacity-60 cursor-pointer hover:opacity-100 transition">
              <Image
                src={
                  "https://s1.1zoom.me/b5050/112/Lamborghini_Gran_Turismo_Roads_Veneno_Back_view_567887_1920x1080.jpg"
                }
                alt="sadsad"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 flex-shrink-0">
              <Image
                src={
                  "https://s1.1zoom.me/b4954/870/Lamborghini_VAG_Performante_Huracan_Orange_567517_1920x1080.jpg"
                }
                alt="sadsad"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 absolute flex-shrink-0 -right-1/2 opacity-60 cursor-pointer hover:opacity-100 transition">
              <Image
                src={"https://wallpapercave.com/wp/wp4429281.jpg"}
                alt="sadsad"
                width={1920}
                height={1080}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <Footer />
      </main>
    </>
  );
}
