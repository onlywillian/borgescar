import { redirect } from "next/navigation";

import Aside from "@/components/Aside";
import Link from "next/link";
import UserForm from "./UserForm";
import { cookies } from "next/headers";

export default function User() {
  // Checking if user is authenticated
  const token = cookies().get("nextAuth.token");

  if (!token) {
    redirect("/conta/login");
  }

  return (
    <main className="flex">
      <Aside>
        <Link href={"/"} className="font-bold">
          HOME
        </Link>
      </Aside>
      <UserForm />
    </main>
  );
}
