'use client'

import React from "react";

import Button from "./Button";
import Input from "./Input";

export default function AssistanceForm() {
    const [ name, setName ] = React.useState('')
    const [ day, setDay ] = React.useState('')
    const [ time, setTime ] = React.useState('')

    function handleServiceButtonClick() {
        if (!name || !day || !time) return alert('Preencha todos os dados')

        return alert('Show')
    }

    return (
        <div className="h-full bg-aside-bg w-2/5 flex flex-col p-8 gap-10 justify-center">
            <h1 className="font-bold text-2xl self-center">Solicitar Atendimento</h1>
            <Input 
                id="nome"
                label="Nome Completo"
                type="text"
                handleInput={setName}
            />
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                    <Input 
                        id="dia"
                        label="Dia do Atendimento"
                        type="date"
                        handleInput={setDay}
                    />
                </div>
                <div className="flex flex-col">
                    <Input 
                        id="horario"
                        label="Horario do Atendimento"
                        type="time"
                        handleInput={setTime}
                    />
                </div>
            </div>

            <Button handleButtonClick={handleServiceButtonClick}>Solicitar Atendimento Agora</Button>
        </div>
    )
}