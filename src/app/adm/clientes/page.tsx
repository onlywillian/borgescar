export const metadata = {
    title: 'Clientes'
}

import Aside from "@/components/Aside";
import TableCeil from "./tableCeil";

export default async function Cars() {
    const usersResponse = await fetch("http://localhost:8000/users/all", {
        cache: 'no-store'
    });
    const usersData = await usersResponse.json();

    return (
        <main className="flex">
            <Aside />
            <div className="w-full h-screen flex flex-col p-8">
                <div className="h-1/5 w-full flex items-center justify-end ">
                    <div className="bg-black">
                        <input 
                            type="text" 
                            placeholder="Pesquisar Usuário" 
                            className="p-2 outline-none border-none bg-gray-200"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-4/5">
                    {usersData.map((user: any) => (
                        <TableCeil id={user.id} name={user.name} email={user.email}/>
                    ))}
                </div>
            </div>
        </main>
    )
}