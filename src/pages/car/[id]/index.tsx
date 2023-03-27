import { useRouter } from "next/router";
import Head from "next/head";

export default function Car() {
    const { query } = useRouter()

    return (
        <>
            <Head>
                <title>Carro</title>
            </Head>
            <main className="h-screen w-screen flex p-6">
                <div className="h-3/5 bg-gray-300 w-3/5">
                    <p>Imagens</p>
                </div>
                <div className="h-3/5 bg-aside-bg w-2/5 ">
                    <p>Especificações</p>
                </div>
                <div>

                </div>
            </main>
        </>
    )
}