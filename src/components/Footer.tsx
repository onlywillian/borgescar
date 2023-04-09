import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col relative">
            {/* Blur */}
            <div className='absolute bg-[#B7EEFA] w-full h-full opacity-40 blur-2xl top-0 left-0 -z-10'></div>

            <div className="w-5/6 bg-black h-0.5 self-center my-10"></div>

            <div className="px-16 pb-20 flex w-full justify-between">
                <div className="text-center flex flex-col justify-between" >
                    <h1>BORGE'S CAR &copy; 2023</h1>
                    <Link href={'/termos'}>
                        TERMOS DE COMPROMISSO
                    </Link>
                </div>
                <div className="text-center flex flex-col justify-between">
                    <p>CONTATOS</p> 
                    <p>(85) 9224-0847</p>
                    <p>emailcomercial@borgescar.com</p>
                </div>
            </div>
        </div>
    )
}