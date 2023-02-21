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
            <div className="w-2/5 h-screen bg-aqua-light flex flex-col justify-between p-4">
                <Image src={logo} alt='Logo' className="h-28 w-40 self-end"/>

                <Input type='text' label='PRIMEIRO NOME' id='' light />
                <Input type='text' label='ÚLTIMO NOME' id=''light />
                <Input type='email' label='EMAIL' id=''light />
                <Input type='password' label='SENHA' id=''light />
                <Input type='password' label='CONFIRME SUA SENHA' id=''light />
                <Input type='text' label='CPF' id=''light />

                <Button>CRIE SUA CONTA NA BORGE'S CAR</Button>
            </div>
        </>
    )
}