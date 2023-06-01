"use client";

import { useContext, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { AuthContext } from "@/contexts/authContext";
import logo from "@/../public/logo-light.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLoginButtonClick = async () => {
    if (!email || !pass) return alert("Preencha todos os dados!");

    signIn({ email: email, password: pass });
  };

  return (
    <>
      <main className="h-screen w-screen bg-aqua-light flex items-center justify-center">
        <div className="w-1/4 h-4/6 bg-aqua-v-light rounded-3xl flex flex-col justify-around">
          <Image
            className="h-40 w-40 mt-2 self-center"
            src={logo}
            alt="Borges Car Logo"
          />

          <div className="flex flex-col px-10">
            <Input
              type="email"
              label="E-MAIL"
              id="email"
              handleInput={setEmail}
            />
            <Input
              type="password"
              label="SENHA"
              id="pass"
              handleInput={setPass}
            />

            <div className="flex justify-evenly lg:justify-around">
              <div className="flex">
                <p className="font-extrabold text-xs font text-gray-600">
                  LEMBRE-SE DE MIM{" "}
                </p>
                <input type="checkbox" className="ml-1" />
              </div>
              <Link href={"/conta/recover-password"}>
                <p className="font-extrabold text-xs text-gray-600">
                  ESQUECEU SUA SENHA?
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button handleButtonClick={handleLoginButtonClick}>
              ENTRE NA SUA CONTA AGORA
            </Button>
            <Link href="/conta/registrar" className="self-center">
              <Button>CADASTRE-SE AQUI</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
