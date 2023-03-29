import Head from "next/head"
import Link from "next/link"

import Aside from "@/components/Aside"

export default function NewAdm() {
    <>
        <Head>
            <title>Novo Administrador</title>
        </Head>
        <main>
            <Aside>
                <Link href={'/adm/new-car'}>
                    <h2>Adicionar Veículo</h2>
                </Link>
                <Link href={'/adm/new-admin'}>
                    <h2>Cadastrar Administrador</h2>
                </Link>
            </Aside>
            asdsad
        </main>
    </>
}