'use client'

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"

import logoImage from '../../public/logo-light.svg'

import Menu from "./Menu";

export default function Header() {
    const [menuFlag, setMenuFlag] = useState(false);

    function handleMenuClick() {
        setMenuFlag(!menuFlag)
    }

    return (
        <div className="p-4 flex w-full justify-between">
            <div className="flex w-2/6">
                <Image src={logoImage} alt='Borges Car Logo' className="h-20 w-32"/>
                <h1 className='text-2xl self-end'>BORGE'S CAR</h1>
            </div>

            <div className='flex items-center'>
                <Link href={'/loja'} className='mr-6'>LOJA</Link>
                <Link href={'/conta/login'} className='mr-6'>LOGIN ||| CADASTRO</Link>
        
                <div className='cursor-pointer' onClick={handleMenuClick}>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div> 
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                </div>

                {menuFlag && <Menu handleMenuClick={handleMenuClick} />}
            </div>
        </div>
    )
}