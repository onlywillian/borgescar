export default function Input({ type, label, id, light }: any) {
    return (
    <>
        {light ? 
        <>
            <label htmlFor={id} className='font-extrabold ml-4 text-lg overflow-hidden'>{label}</label>
            <input type={type} id={id} className='bg-white-input border-none outline-0 p-2 rounded-xl text-lg mb-5' />
        </>
        :
        <>
            <label htmlFor={id} className='font-extrabold ml-4 text-lg overflow-hidden'>{label}</label>
            <input type={type} id={id} className='bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white' />
        </>
        }
    </>
    )
}