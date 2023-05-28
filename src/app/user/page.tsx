"use client";

import { useRouter } from "next/navigation";

import Aside from "@/components/Aside";
import Link from "next/link";

export default function User() {
  const router = useRouter();

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("nextAuth.token="))
    ?.split("=")[1];

  if (!token) {
    router.push("/conta/login");
  }

  function handleButtonClick() {
    var Cookies = document.cookie.split(";");

    for (var i = 0; i < Cookies.length; i++) {
      document.cookie = Cookies[i] + "=;expires=" + new Date().toUTCString();
    }

    router.push("/conta/login");
  }

  return (
    <>
      <Aside>
        <Link href={"/"}>HOME</Link>
      </Aside>
      <button onClick={handleButtonClick}>Deslogar</button>
    </>
  );
}
