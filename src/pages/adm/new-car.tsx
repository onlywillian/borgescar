import Head from "next/head";

import Input from "@/components/Input";
import Aside from "@/components/Aside";

export default function NewCar() {
    return (
        <>
            <Head>
                <title>Novo Administrador</title>
            </Head>
            <main className="flex">
                <Aside></Aside>
                <div className="flex p-20">
                    <div className="flex flex-col bg-gray-200">
                        <Input 
                            id="nome-veiculo"
                            label="Nome do Veiculo"
                            type="text"
                        />
                        <Input 
                            id="especificacoes"
                            label="Especificações"
                            type="text"
                        />
                        <Input 
                            id="nome-veiculo"
                            label="Nome do Veiculo"
                            type="text"
                        />
                        <Input 
                            id="nome-veiculo"
                            label="Preço"
                            type="text"
                        />
                        <Input 
                            id="nome-veiculo"
                            label="Estoque"
                            type="date"
                        />
                    </div>
                    <div className="bg-gray-200">

                    </div>
                </div>
            </main>
        </>
    )
}