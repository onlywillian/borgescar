'use client'

import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";

import logo from '@/../public/logo-light.svg'

export default function Registrar() {
    const [nameUser, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleButtonClick = async (e: MouseEvent) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8000/users/new", {
            method: "POST",
            body: JSON.stringify({ 
                name: nameUser, 
                email: email, 
                password: pass 
            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();

        return console.log(data)
    }

    return (
        <>
            <Head>
                <title>Borges Car</title>
            </Head>
            <form className="w-2/5 h-screen bg-aqua-v-light flex flex-col justify-between p-4">
                <Image src={logo} alt='Logo' className="h-28 w-40 self-end"/>

                <Input type='text' label='NOME COMPLETO' id='first-name' handleInput={setName}/>
                <Input type='email' label='EMAIL' id='email' handleInput={setEmail}/>
                <Input type='password' label='SENHA' id='pass' handleInput={setPass}/>
                <Input type='password' label='CONFIRME SUA SENHA' id='confirm-pass'/>

                <Button handleButtonClick={handleButtonClick}>CRIE SUA CONTA NA BORGE'S CAR</Button>
            </form>
        </>
    )
}