import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";

import logo from '../../../public/assets/app-logos/bc-logo-light.svg'

export default function Registrar() {
    const [nameUser, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cpf, setCpf] = useState('')

    const handleButtonClick = async () => {
        const response = await fetch("http://localhost:8000/users/find", {
            method: "POST",
            body: JSON.stringify({ email: email, password: pass }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();

        return console.log(data)
    }

    return (
        <>
            <Head>
                <title>Borges Car</title>
            </Head>
            <form className="w-2/5 h-screen bg-aqua-light flex flex-col justify-between p-4">
                <Image src={logo} alt='Logo' className="h-28 w-40 self-end"/>

                <Input type='text' label='NOME COMPLETO' id='first-name' handleInput={setName} light/>
                <Input type='email' label='EMAIL' id='email' handleInput={setEmail} light/>
                <Input type='password' label='SENHA' id='pass' handleInput={setPass} light/>
                <Input type='password' label='CONFIRME SUA SENHA' id='confirm-pass' light/>
                <Input type='text' label='CPF' id='cpf' handleInput={setCpf} light/>

                <Button handleButtonClick={handleButtonClick}>CRIE SUA CONTA NA BORGE'S CAR</Button>
            </form>
        </>
    )
}