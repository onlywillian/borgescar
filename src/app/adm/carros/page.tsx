export const metadata = {
    title: 'Carros'
}

import Aside from "@/components/Aside";

import Link from "next/link";

export default async function Cars() {
  const carsResponse = await fetch("http://localhost:8000/cars/all", {
    cache: "no-store",
  });
  const carsData = await carsResponse.json();

  console.log(carsData);

  return (
    <main className="flex">
      <Aside />
      <div className="w-full h-screen flex flex-col p-8">
        <div className="h-1/5 w-full flex items-center justify-end ">
          <div className="bg-black">
            <input
              type="text"
              placeholder="Pesquisar Veículo"
              className="p-2 outline-none border-none bg-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-4/5">
          {carsData.Cars.map((iten: any) => (
            <div
              key={iten.id}
              className="w-full p-4 even:bg-adm-blue odd:bg-aqua-v-light flex"
            >
              <span className="w-4/5">{iten.name}</span>
              <span className="w-1/5 border-l-2 border-black text-center">
                {iten.id}
              </span>
              <Link
                href={"/adm/editar-carro"}
                className="w-1/5 border-l-2 border-black text-center"
              >
                Configs
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
