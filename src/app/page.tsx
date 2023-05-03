"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logos from "@/components/Logos";

import carImage from "../../public/assets/cars/aston.jpg";
import { useRef } from "react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (slideIndex: number) => {
    const slide = carouselRef.current?.children[slideIndex];
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <>
      <main className="h-screen overflow-auto">
        <Header />
        <div className="w-full overflow-auto">
          <div
            className="flex transition-transform duration-300"
            ref={carouselRef}
          >
            <div className="w-2/3 flex-shrink-0">
              <Image
                src={
                  "https://s1.1zoom.me/b4954/870/Lamborghini_VAG_Performante_Huracan_Orange_567517_1920x1080.jpg"
                }
                alt="sadsad"
                width={10000}
                height={10000}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 flex-shrink-0">
              <Image
                src={
                  "https://s1.1zoom.me/b4954/870/Lamborghini_VAG_Performante_Huracan_Orange_567517_1920x1080.jpg"
                }
                alt="sadsad"
                width={10000}
                height={10000}
                className="w-full h-full"
              />
            </div>
            <div className="w-2/3 flex-shrink-0">
              <Image
                src={
                  "https://s1.1zoom.me/b4954/870/Lamborghini_VAG_Performante_Huracan_Orange_567517_1920x1080.jpg"
                }
                alt="sadsad"
                width={10000}
                height={10000}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex w-full justify-center mt-4">
            <button
              className="mx-2 w-4 h-4 rounded-full bg-gray-500 transition-colors duration-300"
              onClick={() => scrollToSlide(0)}
            />
            <button
              className="mx-2 w-4 h-4 rounded-full bg-gray-500 transition-colors duration-300"
              onClick={() => scrollToSlide(1)}
            />
            <button
              className="mx-2 w-4 h-4 rounded-full bg-gray-500 transition-colors duration-300"
              onClick={() => scrollToSlide(2)}
            />
          </div>
        </div>
        {/* <div className="w-full my-10 flex justify-center gap-10">
          <Logos />
        </div>
        <div className="h-full bg-gray-200 w-full">
          <Image src={carImage} alt="Aston Martin" className="w-full h-full" />
        </div> */}
        <Footer />
      </main>
    </>
  );
}
