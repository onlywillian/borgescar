export const metadata = {
  title: "Loja",
};

import Link from "next/link";
import Image from "next/image";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Aside from "@/components/Aside";
import banner from "@/../public/assets/banner.png";
import Input from "@/components/Input";
import { IoHomeSharp } from "react-icons/io5";

export default async function Loja() {
  const token = cookies().get("nextAuth.token");

  if (!token) {
    redirect("/conta/login");
  }

  const carsResponse = await fetch("http://localhost:8000/cars/all", {
    cache: "no-store",
  });
  const carsData = await carsResponse.json();

  return (
    <>
      <main className="bg-[#f5f9ff] flex">
        <Aside>
          <Link href={"/"} className="font-bold">
            <p className="flex w-full gap-2 items-center text-lg hover:border-b-2 hover:border-black transition-all">
              <IoHomeSharp /> HOME
            </p>
          </Link>
        </Aside>
        <div className="h-screen px-10 w-full py-10 overflow-auto flex flex-col">
          <Link
            href="/loja/car/6493a7b7e5578e6f3b22832c"
            className="w-10/12 h-4/6 mb-10 text-center self-center shadow-xl cursor-pointer hover:scale-105 transition-all"
          >
            <Image
              src={banner}
              alt="Imagem de promoção"
              width={10000}
              height={10000}
              className="w-full h-full"
            />
          </Link>
          <div className="w-full grid grid-cols-2 justify-items-center gap-y-10">
            {carsData.Cars &&
              carsData.Cars.map((value: any) => (
                <Link
                  href={`/loja/car/${value.id}`}
                  key={value.id}
                  className="w-2/3 h-96 self-center bg-white transition-all hover:shadow-xl hover:scale-105"
                >
                  <Image
                    src={value.image_links[0]}
                    alt={"Imagem do carro"}
                    width={1000}
                    height={0}
                    className="h-4/5 w-full scale-x-75 scale-y-[60%]"
                  />
                  <div className="h-1/5 m-2">
                    <p className="font-bold">{value.name}</p>
                    <p className="font-bold">
                      R$ {value.price.toLocaleString("pt-BR") + ",00"}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
