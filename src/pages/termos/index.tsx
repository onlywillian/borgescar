import Head from 'next/head'
import Image from 'next/image'

import logoImage from '../../../public/logo-light.svg'

export default function Termos() {
    return (
        <>
        <Head>
            <title>Termos de Compromisso</title>
        </Head>
        <main className="bg-aqua-light h-screen flex justify-center items-center">
            <div className="bg-aqua-v-light w-1/2 rounded-lg flex flex-col p-10">
                <Image src={logoImage} alt='logo' className='h-20 w-20 self-end mb-10'/>

                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </main>
        </>
    )
}