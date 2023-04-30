import Link from "next/link";

interface MenuProps {
  handleMenuClick?: Function;
}

export default function Menu({ handleMenuClick }: MenuProps) {
  return (
    <div className="w-screen h-screen absolute flex left-0 top-0 z-10">
      <div
        className="w-full h-screen bg-black opacity-50"
        onClick={() => handleMenuClick?.()}
      ></div>

      <div className="h-screen w-1/6 bg-menu-light right-0 top-0 animate-menu">
        <div className="bg-menu-dark p-4">
          <h2 className="text-3xl text-white">MENU</h2>
        </div>
        <div className="p-4 text-xl flex flex-col gap-2">
          <Link href={"/loja"} className="mr-6">
            LOJA
          </Link>
          <Link href={"/termos"} className="mr-6">
            TERMOS DE COMPROMISSO
          </Link>
          <Link href={"/quem-somos"} className="mr-6">
            QUEM SOMOS
          </Link>
        </div>
      </div>
    </div>
  );
}
