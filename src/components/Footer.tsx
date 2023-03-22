import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col">
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
                    <p>xxxx-xxxxx</p>
                    <p>E-mail Comercial</p>
                </div>
            </div>
        </div>
    )
}