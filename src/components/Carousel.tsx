"use client"

import { useState } from "react";

import aston1 from "@/../public/assets/cars/aston_1.jpg";
import aston2 from "@/../public/assets/cars/aston_2.jpg";
import aston3 from "@/../public/assets/cars/aston_3.jpg";

import Image from "next/image";

export default function Carousel() {
  const [indexImage, setIndexImage] = useState(1);
  const images = [
    {
      link: aston1,
    },
    {
      link: aston2,
    },
    {
      link: aston3,
    },
  ];

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
          priority
        />
      </div>
      <div className="w-2/3 h-5/6 self-start">
        <Image
          src={images[indexImage].link}
          alt="Carro"
          width={1920}
          height={0}
          className="w-full h-full"
          priority
        />
      </div>
      <div
        className="w-2/3 h-5/6 absolute -right-1/2 opacity-60 cursor-pointer hover:opacity-100 transition self-end p-4"
        onClick={() => handleImagesClick(true)}
      >
        <Image
          src={images[indexImage >= 2 ? 0 : indexImage + 1].link}
          alt="Carro"
          width={1920}
          height={1080}
          className="w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
