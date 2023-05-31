export const metadata = {
  title: "Clientes",
};

import { cookies } from "next/headers";
import TableCeil from "./tableCeil";
import { redirect } from "next/navigation";

export default async function Cars() {
  const token = cookies().get("adm.token");

  if (!token) {
    redirect("/adm/login");
  }

  const usersResponse = await fetch("http://localhost:8000/users/all", {
    cache: "no-store",
  });
  const usersData = await usersResponse.json();

  return (
    <>
      <div className="w-full h-screen flex flex-col p-8">
        <div className="h-1/5 w-full flex items-center ">
          <h1 className="font-bold text-4xl">Clientes</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-4/5">
          {usersData.map((user: any) => (
            <TableCeil id={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </>
  );
}
