import Aside from "@/components/Aside";

import Link from "next/link";

export default function Cars() {
    const data = [
        {
            id: 1,
            name: 'Usuário exemplo 1',
            email: 'exemplo1@gmail.com'
        },
        {
            id: 2,
            name: 'Usuário exemplo 2',
            email: 'exemplo2@gmail.com'
        }
    ]

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
                    {data.map((iten) => (
                        <div key={iten.id} className="w-full p-4 even:bg-adm-blue odd:bg-aqua-v-light flex">
                            <span className="w-2/5">{iten.name}</span>
                            <span className="w-3/5 border-l-2 border-black px-2">{iten.email}</span>
                            <Link href={'/adm/editar-carro'} className="w-1/5 border-l-2 border-black text-center">
                                Configs
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}