export default function Input({ type, label, id }: any) {
    return (
        <>
            <label htmlFor={id} className='font-extrabold ml-4 text-xl'>{label}</label>
            <input type={type} id={id} className='bg-[#6F87C5] border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white' />
        </>
    )
}