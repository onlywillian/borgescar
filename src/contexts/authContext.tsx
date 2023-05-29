"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import decode from "jwt-decode";

type User = {
  email: string;
  password: string;
};

type Adm = {
  email: string;
  password: string;
};

type SignInData = {
  email: string;
  password: string;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  adm: Adm | null;
  isAuthenticated: boolean;
  administratorSignIn: (data: SignInData) => Promise<void>;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [adm, setAdm] = useState<Adm | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("nextAuth.token="))
      ?.split("=")[1];

    if (token) {
      const decodedToken: any = decode(token);

      setUser({ email: decodedToken.email, password: decodedToken.password });
    }
  }, []);

  async function administratorSignIn({ email, password }: SignInData) {
    // calling back-end login api
    const response = await fetch("http://localhost:8000/adm/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { Adm, token } = await response.json();

    if (!Adm) return alert("Usuário não encontrado");

    var data = new Date();
    var valorEmMilissegundos = data.getTime();
    var valorDuasHorasAtualizado = valorEmMilissegundos + 2 * 60 * 60 * 1000;

    data.setTime(valorDuasHorasAtualizado);

    document.cookie = `nextAuth.token=${token}; expires=${data.toUTCString()}`; // 2 hours

    setAdm(Adm);

    return router.push("/adm/clientes");
  }

  async function signIn({ email, password }: SignInData) {
    // calling back-end login api
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { User, token } = await response.json();

    if (!User) return alert("Usuário não encontrado");

    var data = new Date();
    var valorEmMilissegundos = data.getTime();
    var valorDuasHorasAtualizado = valorEmMilissegundos + 2 * 60 * 60 * 1000;

    data.setTime(valorDuasHorasAtualizado);

    document.cookie = `nextAuth.token=${token}; expires=${data.toUTCString()}`; // 2 hours

    setUser(User);

    return router.push("/loja");
  }

  async function signUp({ name, email, password }: SignUpData) {
    // calling back-end register api
    const response = await fetch("http://localhost:8000/auth/register", {
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
    const { User, token } = await response.json();

    var data = new Date();
    var valorEmMilissegundos = data.getTime();
    var valorDuasHorasAtualizado = valorEmMilissegundos + 2 * 60 * 60 * 1000;

    data.setTime(valorDuasHorasAtualizado);

    document.cookie = `nextAuth.token=${token}; expires=${data.toUTCString()}`; // 2 hours

    setUser(User);

    // Redirect to store page
    return router.push("/loja");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        adm,
        isAuthenticated,
        administratorSignIn,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
