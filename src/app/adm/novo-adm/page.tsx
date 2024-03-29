"use client";

import { useContext, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/contexts/authContext";
import { redirect } from "next/navigation";

export default function NewAdm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAdmAuthenticated } = useContext(AuthContext);

  if (!isAdmAuthenticated) redirect("/adm/login");

  async function handleButtonClick() {
    if (!name || !email || !password || !confirmPassword)
      return alert("Preencha os campos corretamente");

    if (password != confirmPassword)
      return alert("Suas senhas estão diferentes");

    const newAdm = await fetch("http://localhost:8000/adm/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await newAdm.json();

    if (data.Error) return alert("Erro: " + data.Error);

    return alert("Administrador criado com sucesso");
  }

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center w-1/2">
          <h1 className="text-3xl font-extrabold mb-6">
            Cadastrar Administrador
          </h1>

          <Input
            id="nome"
            label="Nome Completo"
            type="text"
            handleInput={setName}
          />
          <Input id="email" label="Email" type="text" handleInput={setEmail} />
          <Input
            id="password"
            label="Senha"
            type="password"
            handleInput={setpassword}
          />
          <Input
            id="confirm-password"
            label="Confirme sua Senha"
            type="password"
            handleInput={setConfirmPassword}
          />

          <Button handleButtonClick={handleButtonClick}>
            Cadastrar Administrador
          </Button>
        </div>
      </div>
    </>
  );
}
