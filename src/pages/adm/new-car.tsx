import Link from "next/link";
import Head from "next/head";

import Input from "@/components/Input";
import Aside from "@/components/Aside";

export default function NewCar() {
    return (
        <>
            <Head>
                <title>Novo Carro</title>
            </Head>
            <main className="flex">
                <Aside>
                    <Link href={'/adm/new-car'}>
                        <h2 className="font-bold text-xl">Adicionar Veículo</h2>
                    </Link>
                    <Link href={'/adm/new-admin'}>
                        <h2 className="font-bold text-xl">Cadastrar Administrador</h2>
                    </Link>
                </Aside>
                <div className="flex p-20 justify-between w-full">
                    <div className="flex flex-col justify-center w-1/3">
                        <Input 
                            id="nome-veiculo"
                            label="Nome do Veiculo"
                            type="text"
                        />
                        <>
                            <label htmlFor="" className="font-bold ml-4"> Especificações</label>
                            <textarea id="" className="h-1/5 resize-none border-none bg-purple-input rounded-xl text-white p-2 outline-0"></textarea>        
                        </>
                        <Input 
                            id="tipo-veiculo"
                            label="Tipo do Veiculo"
                            type="text"
                        />
                        <Input 
                            id="preco-veiculo"
                            label="Preço"
                            type="text"
                        />
                        <Input 
                            id="estoque-veiculo"
                            label="Estoque"
                            type="date"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-1/3">
                        <>
                            <label htmlFor="" className="font-bold ml-4"> Imagem do Veículo</label>
                            <textarea id="" className="h-2/5 resize-none border-none bg-purple-input rounded-xl text-white p-2 outline-0"></textarea>        
                        </>
                        <Input 
                            id="som"
                            label="Som do Veículo"
                            type="file"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}