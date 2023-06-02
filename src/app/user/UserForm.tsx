"use client";

import Button from "@/components/Button";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function UserForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  const { user } = useContext(AuthContext);

  function handleButtonLogOutClick() {
    var Cookies = document.cookie.split(";");

    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=;expires=" + new Date().toUTCString();
    }

    router.push("/conta/login");
  }

  async function handleSaveButtonClick(e: MouseEvent) {
    e.preventDefault();

    if (!userName && !userEmail) return alert("Nenhuma modificação feita");

    if (userName === user?.name || userEmail === user?.email)
      return alert("Nenhuma modificação feita");

    const response = await fetch("http://localhost:8000/users/update", {
      method: "POST",
      body: JSON.stringify({
        oldEmail: user?.email,
        newEmail: userEmail,
        newName: userName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();

    return alert(data);
  }

  return (
    <form className="flex p-20 justify-between w-full flex-col">
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col justify-center w-1/3">
          <div className="w-full flex flex-col">
            <label
              htmlFor="user-name"
              className="font-extrabold ml-4 text-lg overflow-hidden"
            >
              Nome de Usuário
            </label>
            <input
              type="text"
              id="user-name"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setUserName(e.target.value)}
              value={userName ? userName : user?.name}
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              className="font-extrabold ml-4 text-lg overflow-hidden"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail ? userEmail : user?.email}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 w-full justify-center">
        <Button handleButtonClick={handleButtonLogOutClick}>Log Out</Button>
        <Button handleButtonClick={handleSaveButtonClick}>
          Salvar Alterações
        </Button>
      </div>
    </form>
  );
}
