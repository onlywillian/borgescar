import Link from "next/link"
import { useRef } from "react"

export default function Header() {
    let menuRef = useRef<HTMLDivElement | null>(null);

    function handleMenuClick() {
        // menu action
    }

    return (
        <div className="p-4 flex w-full justify-between">
            <h1 className='text-3xl'>BORGE'S CAR</h1>

            <div className='flex'>
                <Link href={'/conta/login'} className='mr-6'>LOGIN ||| CADASTRO</Link>

                <div className='cursor-pointer' onClick={handleMenuClick} ref={menuRef}>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                </div>
            </div>
        </div>
    )
}