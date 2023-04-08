export const metadata = {
    title: 'Novo Administrador'
}

import Aside from "@/components/Aside"
import Button from "@/components/Button"
import Input from "@/components/Input"

export default function NewAdm() {
    return (
        <>
            <main className="flex">
                <Aside />
                <div className="flex flex-col items-center justify-center text-center w-full">
                        <Input 
                            id="tipo-veiculo"
                            label="Nome Completo"
                            type="text"
                        />
                        <Input 
                            id="tipo-veiculo"
                            label="Email"
                            type="text"
                        />
                        <Input 
                            id="tipo-veiculo"
                            label="Senha"
                            type="text"
                        />
                        <Input 
                            id="tipo-veiculo"
                            label="Confirme sua Senha"
                            type="text"
                        />

                        <Button>
                            Cadastrar Administrador
                        </Button>
                </div>
            </main>
        </>
    )
}