import Head from "next/head";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";

import logo from '../../../public/assets/app-logos/bc-logo-light.svg'

export default function Registrar() {
    return (
        <>
            <Head>
                <title>Borges Car</title>
            </Head>
            <form className="w-2/5 h-screen bg-aqua-light flex flex-col justify-between p-4">
                <Image src={logo} alt='Logo' className="h-28 w-40 self-end"/>

                <Input type='text' label='NOME COMPLETO' id='first-name' light />
                <Input type='email' label='EMAIL' id='email' light />
                <Input type='password' label='SENHA' id='pass' light />
                <Input type='password' label='CONFIRME SUA SENHA' id='confirm-pass' light />
                <Input type='text' label='CPF' id='cpf' light />

                <Button>CRIE SUA CONTA NA BORGE'S CAR</Button>
            </form>
        </>
    )
}