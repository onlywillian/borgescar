import Head from "next/head"
import Link from "next/link"

import Aside from "@/components/Aside"
import Input from "@/components/Input"

export default function NewAdm() {
    return (
        <>
            <Head>
                <title>Novo Administrador</title>
            </Head>
            <main className="flex">
                <Aside>
                    <Link href={'/adm/new-car'}>
                        <h2>Adicionar Veículo</h2>
                    </Link>
                    <Link href={'/adm/new-admin'}>
                        <h2>Cadastrar Administrador</h2>
                    </Link>
                </Aside>
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