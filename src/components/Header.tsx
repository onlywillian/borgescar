"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

import { AuthContext } from "@/contexts/authContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoImage from "../../public/logo-light.svg";

import Menu from "./Menu";

export default function Header() {
  const [menuFlag, setMenuFlag] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);

  function handleMenuClick() {
    setMenuFlag(!menuFlag);
  }

  return (
    <div className="p-4 flex w-full justify-between relative">
      <div className="absolute bg-[#B7EEFA] w-full opacity-40 h-28 blur-2xl top-0 left-0 -z-10"></div>

      <div className="flex w-2/6">
        <Image src={logoImage} alt="Borges Car Logo" className="h-20 w-32" />
        <h1 className="text-2xl self-end">BORGE'S CAR</h1>
      </div>

      <div className="flex items-center">
        {!isAuthenticated && (
          <Link href={"/conta/login"} className="mr-6">
            LOGIN ||| CADASTRO
          </Link>
        )}

        {isAuthenticated && (
          <Link href={"/user"} className="mr-8">
            <IoPersonCircleOutline className="text-4xl hover:text-cyan-900 transition-all" />
          </Link>
        )}

        <div className="cursor-pointer" onClick={handleMenuClick}>
          <div className="w-10 bg-black h-1 my-1"></div>
          <div className="w-10 bg-black h-1 my-1"></div>
          <div className="w-10 bg-black h-1 my-1"></div>
          <div className="w-10 bg-black h-1 my-1"></div>
        </div>

        {menuFlag && <Menu handleMenuClick={handleMenuClick} />}
      </div>
    </div>
  );
}
