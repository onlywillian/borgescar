import Image from "next/image"
import Link from "next/link"

import { ReactNode } from "react"

import logoImage from '../../public/logo-light.svg'

interface AsideProps {
    children?: ReactNode
}

export default function Aside({ children }: AsideProps) {
    return (
        <>
            { !children ? 
                <aside className="w-1/5 bg-aside-bg h-screen sticky flex flex-col gap-y-2">
                    <div className="bg-[#33586C] py-8 flex align-center mb-8 shadow-xl">
                        <Image src={logoImage} alt='logo' className="h-28"/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <Link href={'/adm/new-car'}>
                            <h2 className="font-bold text-mg">Adicionar Veículo</h2>
                        </Link>
                        <Link href={'/adm/new-admin'}>
                            <h2 className="font-bold text-mg">Cadastrar Administrador</h2>
                        </Link>
                        <Link href={'/adm/new-admin'}>
                            <h2 className="font-bold text-mg">Editar Veículo</h2>
                        </Link>
                        <Link href={'/adm/new-admin'}>
                            <h2 className="font-bold text-mg">Banco de Dados dos Clientes</h2>
                        </Link>
                        <Link href={'/adm/new-admin'}>
                            <h2 className="font-bold text-mg">Banco de Dados dos Carros</h2>
                        </Link>
                    </div>
                </aside>
                :
                <aside className="w-1/5 bg-aside-bg h-screen sticky flex flex-col gap-y-2">
                    <div className="bg-[#33586C] py-8 flex align-center mb-8 shadow-xl">
                        <Image src={logoImage} alt='logo' className="h-28"/>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        {children}
                    </div>
                </aside>
            }
        </>
    )
}