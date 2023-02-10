import Link from "next/link"

export default function Header() {
    return (
        <div className="p-4 flex w-full justify-between">
            <h1 className='text-3xl'>BORGE'S CAR</h1>

            <div className='flex'>
                <Link href={'/conta/login'} className='mr-6'>LOGIN ||| CADASTRO</Link>

                <div className='cursor-pointer'>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                </div>
            </div>
        </div>
    )
}