interface InputProps {
    type: string,
    label: string,
    id: string,
    light: boolean,
    handleInput?: Function
}

export default function Input({ type, label, id, light, handleInput }: InputProps) {
    return (
    <>
        {light ? 
        <>
            <label htmlFor={id} className='font-extrabold ml-4 text-lg overflow-hidden'>{label}</label>
            <input 
                type={type} 
                id={id} 
                onInput={(e) => handleInput?.(e)}
                className='bg-white-input border-none outline-0 p-2 rounded-xl text-lg mb-5' 
            />
        </>
        :
        <>
            <label htmlFor={id} className='font-extrabold ml-4 text-lg overflow-hidden'>{label}</label>
            <input 
                type={type} 
                id={id} 
                onInput={(e) => handleInput?.(e.currentTarget.value)}
                className='bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white' 
            />
        </>
        }
    </>
    )
}