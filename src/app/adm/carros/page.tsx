export const metadata = {
  title: "Carros",
};

import { IoSettingsSharp } from "react-icons/io5";

import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Cars() {
  const token = cookies().get("adm.token");

  if (!token) {
    redirect("/adm/login");
  }

  const carsResponse = await fetch("http://localhost:8000/cars/all", {
    cache: "no-store",
  });
  const carsData = await carsResponse.json();

  return (
    <>
      <div className="w-full h-screen flex flex-col p-8">
        <div className="h-1/5 w-full flex items-center ">
          <h1 className="font-bold text-4xl">Carros</h1>
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
                href={`/adm/editar-carro/${iten.id}`}
                className="w-1/5 border-l-2 border-black flex justify-center items-center"
              >
                <IoSettingsSharp className="text-2xl" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
