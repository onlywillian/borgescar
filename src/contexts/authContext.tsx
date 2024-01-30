"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import decode from "jwt-decode";

type User = {
  name: string;
  email: string;
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
  isAdmAuthenticated: boolean;
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
  const isAdmAuthenticated = !!adm;

  useEffect(() => {
    const userToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("nextAuth.token="))
      ?.split("=")[1];

    if (userToken) {
      const decodedToken: any = decode(userToken);

      setUser({
        name: decodedToken.name,
        email: decodedToken.email,
      });
    }

    const admToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adm.token="))
      ?.split("=")[1];

    if (admToken) {
      const decodedToken: any = decode(admToken);

      setAdm({
        email: decodedToken.email,
        password: decodedToken.password,
      });
    }
  }, []);

  async function administratorSignIn({ email, password }: SignInData) {
    try {
      const response = await fetch("http://localhost:8000/adm/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao realizar o login");
      }

      const { Adm, token } = await response.json();

      if (!Adm) return alert("Usuário não encontrado");

      const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
      document.cookie = `adm.token=${token}; expires=${twoHoursFromNow.toUTCString()}`;

      setAdm(Adm);

      router.push("/adm/clientes");
    } catch (error: any) {
      alert(error);
    }
  }

  async function administratorSignUp({ name, email, password }: SignUpData) {
    try {
      const response = await fetch("http://localhost:8000/adm/auth/register", {
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

      if (!response.ok) {
        throw new Error("Falha ao realizar o login");
      }

      const { Adm, token } = await response.json();

      if (!Adm) return alert("Usuário não encontrado");

      const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
      document.cookie = `adm.token=${token}; expires=${twoHoursFromNow.toUTCString()}`;

      setAdm(Adm);

      router.push("/adm/clientes");
    } catch (error) {
      alert(error);
    }
  }

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao realizar o login");
      }

      const { User, token } = await response.json();

      if (!User) {
        throw new Error("Usuário não encontrado");
      }

      const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
      document.cookie = `nextAuth.token=${token}; expires=${twoHoursFromNow.toUTCString()}; path="/"`;

      setUser(User);

      router.push("/loja");
    } catch (error: any) {
      alert(error);
    }
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

    console.log(token);

    const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
    document.cookie = `nextAuth.token=${token}; expires=${twoHoursFromNow.toUTCString()}; path="/"`;

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
        isAdmAuthenticated,
        administratorSignIn,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
