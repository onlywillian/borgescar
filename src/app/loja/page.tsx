export const metadata = {
  title: "Loja",
};

import Link from "next/link";
import Image from "next/image";

import Aside from "@/components/Aside";

export default async function Loja() {
  const carsResponse = await fetch("http://localhost:8000/cars/all", {
    cache: "no-store",
  });
  const carsData = await carsResponse.json();

  return (
    <>
      <main className="bg-aqua-v-light flex">
        <Aside>
          <p className="font-bold">CONSÓRCIO</p>
          <p className="font-bold">FILTROS</p>
          <div className="ml-4 flex flex-col gap-y-2">
            <p>PORTAS</p>
            <p>PREÇO</p>
            <p>ANO</p>
            <div className="flex justify-between">
              <p>NOVOS</p>
              <p>SEMINOVOS</p>
            </div>
            <p>VENDAS ESPECIAIS</p>
          </div>
        </Aside>
        <div className="h-screen px-10 w-full py-10 overflow-auto flex flex-col">
          <div className=" w-10/12 h-3/5 mb-10 text-center self-center shadow-2xl">
            <Image
              src={
                "https://s1.1zoom.me/b5050/792/BUGATTI_Divo_2019_552153_1920x1080.jpg"
              }
              alt="Imagem de promoção"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div className="w-full grid grid-cols-2 justify-items-center gap-y-10">
            {carsData.Cars &&
              carsData.Cars.map((value: any) => (
                <Link
                  href={`/loja/car/${value.id}`}
                  key={value.id}
                  className="w-2/3 h-96 self-center bg-aside-bg shadow-2xl"
                >
                  <Image
                    src={value.image_links[0]}
                    alt={"Imagem do carro"}
                    width={1000}
                    height={0}
                    className="h-4/5 w-full"
                  />
                  <div className="h-1/5 m-2">
                    <p className="font-bold">Modelo: {value.name}</p>
                    <p className="font-bold">Preço: R${value.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
