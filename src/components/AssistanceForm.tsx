import Button from "./Button";
import Input from "./Input";

export default function AssistanceForm() {
    return (
        <div className="h-full bg-aside-bg w-2/5 flex flex-col p-8">
            <h1 className="font-bold text-2xl self-center">Solicitar Uma Consulta</h1>
            <Input 
                id="nome"
                label="Nome Completo"
                type="text"
            />
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <Input 
                        id="nome"
                        label="Exemplo"
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <Input 
                        id="nome"
                        label="Exemplo"
                        type="text"
                    />
                </div>
            </div>

            <Button>Solicitar Consulta</Button>
        </div>
    )
}