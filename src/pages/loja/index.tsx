import Head from "next/head";
import Image from "next/image";

import logoImage from '../../../public/logo-light.svg'

export default function Loja() {
    return (
        <>
        <Head>
            <title>Loja</title>
        </Head>
        <main className="h-screen bg-aqua-v-light flex">
            <aside className="w-1/5 bg-aside-bg h-screen sticky flex flex-col">
                <Image src={logoImage} alt='logo' className="h-28"/>
            </aside>
            <div className="px-10 w-full">
                <div className="bg-gray-500 w-full h-2/5">Landing</div>
                <div>
                    
                </div>
            </div>
        </main>
        </>
    )
}