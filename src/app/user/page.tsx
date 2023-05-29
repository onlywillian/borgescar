"use client";

import { useRouter } from "next/navigation";

import Aside from "@/components/Aside";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function User() {
  const router = useRouter();

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("nextAuth.token="))
    ?.split("=")[1];

  if (!token) {
    router.push("/conta/login");
  }

  function handleButtonLogOutClick() {
    var Cookies = document.cookie.split(";");

    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=;expires=" + new Date().toUTCString();
    }

    router.push("/conta/login");
  }

  return (
    <main className="flex">
      <Aside>
        <Link href={"/"}>Home</Link>
      </Aside>
      <form className="flex p-20 justify-between w-full flex-col">
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col justify-center w-1/3">
            <Input
              id="name"
              label="Nome do usuário"
              type="text"
              // handleChange={handleInputChange}
            />
            <Input
              id="type"
              label="Email"
              type="text"
              // handleChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex gap-10 w-full justify-center">
          <Button handleButtonClick={handleButtonLogOutClick}>Log Out</Button>
          <Button>Salvar Alterações</Button>
        </div>
      </form>
    </main>
  );
}
