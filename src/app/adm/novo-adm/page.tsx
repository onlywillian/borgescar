'use client'

import { useState } from "react"

import Aside from "@/components/Aside"
import Button from "@/components/Button"
import Input from "@/components/Input"

export default function NewAdm() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setpassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    function handleButtonClick() {
        if (!name || !email || !password || !confirmPassword) return alert('Preencha os campos corretamente')
    }

    return (
        <>
            <main className="flex">
                <Aside />
                <div className="flex w-full justify-center items-center">
                    <div className="flex flex-col items-center justify-center text-center w-1/2">
                            <Input 
                                id="nome"
                                label="Nome Completo"
                                type="text"
                                handleInput={setName}
                            />
                            <Input 
                                id="email"
                                label="Email"
                                type="text"
                                handleInput={setEmail}
                            />
                            <Input 
                                id="password"
                                label="Senha"
                                type="text"
                                handleInput={setpassword}
                            />
                            <Input 
                                id="confirm-password"
                                label="Confirme sua Senha"
                                type="text"
                                handleInput={setConfirmPassword}
                            />

                            <Button handleButtonClick={handleButtonClick}>
                                Cadastrar Administrador
                            </Button>
                    </div>
                </div>
            </main>
        </>
    )
}