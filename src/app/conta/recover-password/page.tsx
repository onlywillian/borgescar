'use client'

import { useState } from "react"

import Head from "next/head"
import Image from "next/image"

import Input from "@/components/Input"
import Button from "@/components/Button"

import logo from '@/../public/logo-light.svg'

export default function RecoverPassword() {
    const [ recoverEmail, setRecoverEmail ] = useState('')

    function handleButtonClick() {
        
    }

    return (
        <>
            <Head>
                <title>Borges Car - Conta</title>
            </Head>
            <main className='h-screen w-screen bg-aqua-light flex items-center justify-center'>
                <div className='w-3/12 h-3/6 bg-aqua-v-light rounded-3xl flex flex-col justify-evenly'>
                    <Image className='h-40 w-40 mt-2 self-center' src={logo} alt='Borges Car Logo'/>

                    <div className='flex flex-col px-10'>
                        <div className="w-4/5 self-center mb-6 text-center">
                            <p>Preencha os dados abaixo pra solicitar a recuperação da senha</p>
                        </div>
                        <Input 
                            type='email' 
                            label='E-mail de recuperação' 
                            id='email'
                            handleInput={setRecoverEmail}
                        />
                    </div>


                    <div className='flex flex-col gap-4'>
                        <Button handleButtonClick={handleButtonClick}>ENVIAR E-MAIL</Button>
                    </div>
                </div>
            </main>
        </>
    )
}