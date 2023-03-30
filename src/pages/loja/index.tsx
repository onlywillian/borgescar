import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoImage from '../../../public/logo-light.svg'

import Aside from "@/components/Aside";

export default function Loja() {
    const data = [
        {
            id: 1,
            modelo: 'lamborghini Aventador',
            preco: 'R$ 2.000.000.000'
        },
        {
            id: 2,
            modelo: 'Gol bolinha',
            preco: 'R$ 100.000.000.000'
        },
        {
            id: 3,
            modelo: 'HB20',
            preco: 'R$ 2.000'
        },
        {
            id: 4,
            modelo: 'Fusca azul',
            preco: 'R$ 19.000'
        },
        {
            id: 5,
            modelo: 'Fusca azul',
            preco: 'R$ 19.000'
        },
        {
            id: 6,
            modelo: 'Fusca azul',
            preco: 'R$ 19.000'
        },
    ]

    return (
        <>
        <Head>
            <title>Loja</title>
        </Head>
        <main className="bg-aqua-v-light flex">
            <Aside>
                <p className="font-bold">CONSÓRCIO</p>
                <p className="font-bold">FILTROS</p>
                <div className="ml-4 flex flex-col gap-y-2">
                    <p>PORTAS</p>
                    <p>PREÇO</p>
                    <p>ANO</p>
                    <div className="flex justify-between">
                        <p>NOVOS</p>
                        <p>SEMINOVOS</p>
                    </div>
                    <p>VENDAS ESPECIAIS</p>
                </div>
            </Aside>
            <div className="px-10 w-full overflow-auto">
                <div className="border-2 border-black w-full h-2/5 mb-10 text-center">
                    Landing
                </div>
                <div className="w-full grid grid-cols-2 gap-10">
                    {data.map(value => (
                        <Link href={`/car/${value.id}`} key={value.id} className='w-full h-80 bg-gray-300'>
                            <div className="h-4/5 text-center">Imagem</div>
                            <div className="h-1/5 mx-2">
                                <p className="font-bold">Modelo: {value.modelo}</p>
                                <p className="font-bold">Preço: {value.preco}</p>
                            </div>
                        </Link> 
                    ))}
                </div>
            </div>
        </main>
        </>
    )
}