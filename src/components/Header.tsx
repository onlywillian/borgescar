import Link from "next/link"
import { useState } from "react"

import Menu from "./Menu";

export default function Header() {
    const [menuFlag, setMenuFlag] = useState(false);

    function handleMenuClick() {
        setMenuFlag(!menuFlag)

        console.log(menuFlag);
    }

    return (
        <div className="p-4 flex w-full justify-between">
            <h1 className='text-3xl'>BORGE'S CAR</h1>

            <div className='flex'>
                <Link href={'/conta/login'} className='mr-6'>LOGIN ||| CADASTRO</Link>

                <div className='cursor-pointer' onClick={handleMenuClick}>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                </div>

                {menuFlag && <Menu handleMenuClick={handleMenuClick} />}
            </div>
        </div>
    )
}