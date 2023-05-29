"use client";

import { useContext, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthContext } from "@/contexts/authContext";

export default function NewAdm() {
  const { administratorSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  async function handleButtonClick() {
    administratorSignIn({ email, password });
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
