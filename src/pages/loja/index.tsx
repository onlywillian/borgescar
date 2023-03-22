import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoImage from '../../../public/logo-light.svg'

export default function Loja() {
    const data = [
        {
            id: 1,
            modelo: '',
            preco: ''
        },
        {
            id: 2,
            modelo: '',
            preco: ''
        },
        {
            id: 3,
            modelo: '',
            preco: ''
        },
        {
            id: 4,
            modelo: '',
            preco: ''
        },
    ]

    return (
        <>
        <Head>
            <title>Loja</title>
        </Head>
        <main className="h-screen bg-aqua-v-light flex">
            <aside className="w-1/5 bg-aside-bg h-screen sticky flex flex-col p-4 gap-y-2">
                <Image src={logoImage} alt='logo' className="h-28 mb-8"/>
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
            </aside>
            <div className="px-10 w-full">
                <div className="border-2 border-black w-full h-2/5 mb-10 text-center">
                    Landing
                </div>  
                <div className="w-full grid grid-cols-2 gap-10">
                    {data.map(value => (
                        <Link href={`/car/${value.id}`} key={value.id} className='w-full h-80 bg-gray-300'>
                            <div className="h-4/5 text-center">Imagem</div>
                            <div className="h-1/5 mx-2">
                                <p className="font-bold">Modelo: </p>
                                <p className="font-bold">Preço: </p>
                            </div>
                        </Link> 
                    ))}
                </div>
            </div>
        </main>
        </>
    )
}