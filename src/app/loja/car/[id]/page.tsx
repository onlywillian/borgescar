'use client'

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Button from "@/components/Button";

import logo from "@/../public/logo-light.svg"

export default function Car() {
    const searchParams = useSearchParams()

    return (
        <>
            <Head>
                <title>Carro</title>
            </Head>
            <main className="w-screen flex flex-col">
                <Image alt="Logo do Site" src={logo} className='w-40 mt-8 ml-8'/>
                <div className="h-[70vh] w-screen flex p-8 mb-20">
                    <div className="h-full bg-gray-300 w-3/5 p-4">
                        <div className=""></div>
                    </div>
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
                </div>

                <div className="px-8 flex flex-col mb-20">
                    <div className="flex items-center">
                        <h2>Especificações Gerais</h2> 
                        <div className="w-5/6 bg-black h-0.5 ml-8"></div>
                    </div>
                </div>
                <div className="px-8 flex flex-col">
                    <div className="flex items-center">
                        <h2>Peças</h2> 
                        <div className="w-5/6 bg-black h-0.5 ml-8"></div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}