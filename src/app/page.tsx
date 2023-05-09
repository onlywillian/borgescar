"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";

import { useState } from "react";

export default function Home() {
  const [indexImage, setIndexImage] = useState(0);
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

  function handleImagesClick(forward: boolean) {
    if (forward) {
      if (indexImage >= 2) return setIndexImage(0);

      setIndexImage((state: any) => state + 1);
    } else {
      if (indexImage <= 0) return setIndexImage(2);

      setIndexImage((state: any) => state - 1);
    }
  }

  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <div className="flex h-screen overflow-hidden relative justify-center">
            <div 
              className="w-2/3 h-5/6 absolute -left-1/2 opacity-60 cursor-pointer hover:opacity-100 transition self-end p-4"
              onClick={() => handleImagesClick(false)}
            >
              <Image
                src={images[indexImage <= 0 ? 2 : indexImage - 1].link}
                alt="Carro"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 h-5/6 self-start">
              <Image
                src={images[indexImage].link}
                alt="Carro"
                width={1920}
                height={0}
                className="w-full h-full"
              />
            </div>
            <div 
              className="w-2/3 h-5/6 absolute -right-1/2 opacity-60 cursor-pointer hover:opacity-100 transition self-end p-4" 
              onClick={() => handleImagesClick(true)}
            >
              <img
                src={images[indexImage >= 2 ? 0 : indexImage + 1].link}
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
