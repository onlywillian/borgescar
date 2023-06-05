import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";

import logoImage from "../../public/logo-light.svg";

interface AsideProps {
  children?: ReactNode;
}

export default function Aside({ children }: AsideProps) {
  return (
    <>
      {!children ? (
        <aside className="w-72 bg-aqua-v-light h-screen sticky flex flex-col gap-y-2">
          <div className="bg-[#33586C] py-8 flex align-center mb-8 shadow-xl">
            <Image src={logoImage} alt="logo" className="h-28" />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <Link href={"/adm/novo-carro"}>
              <h2 className="font-bold text-sm">Cadastrar Veículo</h2>
            </Link>
            <Link href={"/adm/novo-adm"}>
              <h2 className="font-bold text-sm">Cadastrar Administrador</h2>
            </Link>
            <Link href={"/adm/clientes"}>
              <h2 className="font-bold text-sm">Clientes</h2>
            </Link>
            <Link href={"/adm/carros"}>
              <h2 className="font-bold text-sm">Carros</h2>
            </Link>
            <Link href={"/adm/scheduling"}>
              <h2 className="font-bold text-sm">Agendamentos</h2>
            </Link>
          </div>
        </aside>
      ) : (
        <aside className="w-72 bg-aside-bg h-screen sticky flex flex-col gap-y-2">
          <div className="bg-[#33586C] py-8 flex align-center mb-8 shadow-xl">
            <Image src={logoImage} alt="logo" className="h-28" />
          </div>
          <div className="p-4 flex flex-col gap-4 text-sm">{children}</div>
        </aside>
      )}
    </>
  );
}
