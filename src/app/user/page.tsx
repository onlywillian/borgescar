import { redirect } from "next/navigation";

import Aside from "@/components/Aside";
import Link from "next/link";
import UserForm from "./UserForm";
import { cookies } from "next/headers";
import { IoHomeSharp, IoNewspaperSharp } from "react-icons/io5";

export default function User() {
  const token = cookies().get("nextAuth.token");

  if (!token) {
    redirect("/conta/login");
  }

  return (
    <main className="flex">
      <Aside>
        <Link href={"/"} className="font-bold">
          <p className="flex w-full gap-2 items-center text-lg hover:border-b-2 hover:border-black transition-all">
            <IoHomeSharp /> HOME
          </p>
        </Link>
        <Link href={`/user/schedules/`} className="font-bold">
          <p className="flex w-full gap-2 items-center text-lg hover:border-b-2 hover:border-black transition-all">
            <IoNewspaperSharp /> AGENDAMENTOS
          </p>
        </Link>
      </Aside>
      <UserForm />
    </main>
  );
}
