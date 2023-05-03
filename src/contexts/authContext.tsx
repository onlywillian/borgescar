"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  email: string;
  password: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("nextAuth.token="))
      ?.split("=")[1];

    if (token) {
      // decode token here
    }
  }, []);

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

    // setting auth cookie
    document.cookie = `nextAuth.token=${token}; max-age=${60 * 60 * 2}`; // 2 hours

    setUser(User);

    // Redirect to store page
    return router.push("/loja");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
