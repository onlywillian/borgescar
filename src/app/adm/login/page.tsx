"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";

export default function NewAdm() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  async function handleButtonClick() {
    if (!email || !password) return alert("Preencha os campos corretamente");

    // const newAdm = await fetch("http://localhost:8000/adms/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await newAdm.json();

    // if (data.Eror) return alert("Algum erro ocorreu");

    return alert("Administrador criado com sucesso");
  }

  return (
    <>
      <main className="flex w-screen justify-center">
        <div className="flex flex-col h-screen items-center justify-center text-center w-1/2">
          <h1 className="text-3xl font-extrabold mb-6">
            Login de Administrador
          </h1>

          <Input id="email" label="Email" type="text" handleInput={setEmail} />
          <Input
            id="password"
            label="Senha"
            type="text"
            handleInput={setpassword}
          />

          <Button handleButtonClick={handleButtonClick}>
            Entrar como Administrador
          </Button>
        </div>
      </main>
    </>
  );
}
