"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";

import carImage from "../../public/assets/cars/aston.jpg";
import { useState } from "react";

export default function Home() {
  const [index, setindex] = useState([0, 1, 2]);
  const [images, setImages] = useState([
    {
      link: 'https://s1.1zoom.me/b5050/112/Lamborghini_Gran_Turismo_Roads_Veneno_Back_view_567887_1920x1080.jpg',
    },
    {
      link: 'https://s1.1zoom.me/b4954/870/Lamborghini_VAG_Performante_Huracan_Orange_567517_1920x1080.jpg',
    },
    {
      link: 'https://wallpapercave.com/wp/wp4429281.jpg',
    },
  ]);

  function handleImagesClick(way: string) {
    if (way === 'next') {

    }
  }

  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <div className="flex h-screen overflow-hidden relative justify-center">
            <div 
              className="w-2/3 h-5/6 absolute -left-1/2 opacity-60 cursor-pointer hover:opacity-100 transition self-end"
              onClick={() => handleImagesClick('previous')}
            >
              <Image
                src={images[index[0]].link}
                alt="Carro"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 h-5/6 self-start">
              <Image
                src={images[index[1]].link}
                alt="Carro"
                width={1920}
                height={0}
                className="w-full h-full"
              />
            </div>
            <div 
              className="w-2/3 h-5/6 absolute -right-1/2 opacity-60 cursor-pointer hover:opacity-100 transition self-end" 
              onClick={() => handleImagesClick('next')}
            >
              <Image
                src={images[index[2]].link}
                alt="Carro"
                width={1920}
                height={1080}
                className="w-full h-full"
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
