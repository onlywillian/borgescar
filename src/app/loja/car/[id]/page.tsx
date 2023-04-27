"use client";

import React from "react";
import Image from "next/image";

import AssistanceForm from "@/components/AssistanceForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { IoCaretForwardOutline } from "react-icons/io5";
import { IoCaretBackOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

export default function Car({ params }: Props) {
  const [carInformationData, setCarInformationData]: any =
    React.useState(false);
  const [indexImage, setIndexImage]: any = React.useState(0);

  async function getData() {
    const carResponse = await fetch(`http://localhost:8000/cars/${params.id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    const carData = await carResponse.json();

    return setCarInformationData(carData.Car);
  }

  React.useEffect(() => {
    getData();
  }, []);

  function handleButtonCarouselClick(forward: boolean) {
    if (forward) {
      if (indexImage >= 2) return;

      return setIndexImage((state: any) => state + 1);
    } else {
      if (indexImage <= 0) return;

      return setIndexImage((state: any) => state - 1);
    }
  }

  return (
    <>
      <main>
        <Header />
        <div className="h-[70vh] w-screen flex p-8 mb-20">
          <div className="h-full bg-aside-bg w-3/5 py-10 px-8 relative">
            <button
              className="h-20 w-20 absolute bg-gray-200 rounded-full top-1/2 left-10 -translate-y-1/2 flex items-center justify-center text-2xl cursor-pointer opacity-70"
              onClick={() => handleButtonCarouselClick(false)}
            >
              <IoCaretBackOutline />
            </button>
            <div
              className="h-20 w-20 absolute bg-gray-200 rounded-full top-1/2 right-10 -translate-y-1/2 flex items-center justify-center text-2xl cursor-pointer opacity-70"
              onClick={() => handleButtonCarouselClick(true)}
            >
              <IoCaretForwardOutline />
            </div>

            {carInformationData && (
              <Image
                src={carInformationData?.image_links[indexImage]}
                alt="Carro Legal"
                width={1000}
                height={0}
                className="w-full h-full bg-white"
              />
            )}
          </div>
          <AssistanceForm />
        </div>

        <div className="px-8 flex flex-col mb-20">
          <div className="flex flex-col">
            <div className="flex items-center w-full mb-4">
              <h2 className="font-bold text-lg">Especificações gerais</h2>
              <div className="w-5/6 bg-black h-0.5 ml-8"></div>
            </div>

            <p>Nome do Veículo: {carInformationData?.name}</p>
            <p>Tipo: {carInformationData?.type}</p>
            <p>Preço: R$ {carInformationData?.price}</p>
            <p>Disponível em Estoque: {carInformationData?.stock}</p>
            <p>Descrição Detalhada: {carInformationData?.description}</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
