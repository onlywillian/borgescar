export const metadata = {
    title: 'Editar Carro'
}

import Aside from "@/components/Aside";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function EditVehicle() {
    return (
        <>
            <main className="flex">
                <Aside />
                <div className="flex p-20 justify-between w-full flex-col">
                    <div className="flex w-full h-full justify-between">
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
                    <div className="flex gap-10">
                        <Button>Excluir Carro</Button>
                        <Button>Salvar Alterações</Button>
                    </div>
                </div>
            </main>
        </>
    )
}