export const metadata = {
    title: 'Novo Administrador'
}

import Aside from "@/components/Aside"
import Input from "@/components/Input"

export default function NewAdm() {
    return (
        <>
            <main className="flex">
                <Aside />
                <div className="flex flex-col p-20 items-center w-full">
                        <Input 
                            id="tipo-veiculo"
                            label="Tipo do Veiculo"
                            type="text"
                        />
                </div>
            </main>
        </>
    )
}