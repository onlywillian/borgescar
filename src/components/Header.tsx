export default function Header() {
    return (
        <div className="p-4 flex w-full justify-between">
            <h1 className='text-3xl'>BORGE'S CAR</h1>

            <div className='flex'>
                <p className='mr-6'>Login ||| Cadastro</p>

                <div className='cursor-pointer'>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                    <div className='w-10 bg-black h-1 my-1'></div>
                </div>
            </div>
        </div>
    )
}