"use client";

import { MouseEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";

import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";

import logo from "@/../public/logo-light.svg";

export default function Registrar() {
  const [nameUser, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleButtonClick = async (e: MouseEvent) => {
    e.preventDefault();

    if (!nameUser || !email || !pass || !confirmPassword)
      return alert("Preencha os campos corretamente");

    if (pass != confirmPassword) return alert("Senhas diferentes");

    return signUp({ name: nameUser, email: email, password: pass });
  };

  return (
    <>
      <Head>
        <title>Borges Car</title>
      </Head>
      <main className="h-screen w-screen overflow-hidden">
        <Image
          src={"https://pbs.twimg.com/media/FY8nnekX0AYzi-G.jpg:large"}
          alt="Carros"
          width={10000}
          height={10000}
          className="w-full h-full absolute -z-20"
        />
        <form className="w-2/5 h-screen flex flex-col justify-between p-4">
          <div className="absolute rotate-12 w-1/2 h-[300vh] bg-aqua-v-light -top-[15%] -translate-y-[50%] -z-10 opacity-80"></div>
          <Image src={logo} alt="Logo" className="h-28 w-40 self-end" />

          <div className="flex flex-col items-center justify-center gap-2">
            <Input
              type="text"
              label="NOME COMPLETO"
              id="first-name"
              handleInput={setName}
            />
            <Input
              type="email"
              label="EMAIL"
              id="email"
              handleInput={setEmail}
            />
            <Input
              type="password"
              label="SENHA"
              id="pass"
              handleInput={setPass}
            />
            <Input
              type="password"
              label="CONFIRME SUA SENHA"
              id="confirm-pass"
              handleInput={setConfirmPassword}
            />
          </div>

          <button
            className="bg-[#6F87C5] text-white font-bold font-3xl py-4 px-10 self-start c-pointer rounded"
            onClick={(e: MouseEvent) => handleButtonClick?.(e)}
          >
            CRIE SUA CONTA NA BORGE'S CAR
          </button>
        </form>
      </main>
    </>
  );
}
