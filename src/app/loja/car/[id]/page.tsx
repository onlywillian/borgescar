import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer";

import logo from "@/../public/logo-light.svg"
import AssistanceForm from "@/components/AssistanceForm";

interface Props {
    params: {
        id: string
    }
}

export default async function Car({ params }: Props) {
    const carResponse = await fetch('http://localhost:8000/cars/find', {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({ id: params.id }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
    const carData = await carResponse.json()
    
    return (
        <>
            <main className="w-screen flex flex-col">
                <Image alt="Logo do Site" src={logo} className='w-40 mt-8 ml-8'/>
                <div className="h-[70vh] w-screen flex p-8 mb-20">
                    <div className="h-full bg-gray-300 w-3/5">
                        <Image 
                            src={carData.Car.image_links[0]}
                            alt='Carro Legal'
                            width={1000}
                            height={0}
                            className='w-full h-full'
                        />
                    </div>
                    <AssistanceForm />
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