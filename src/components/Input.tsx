'use client'

interface InputProps {
    type: string,
    label: string,
    id: string,
    inline?: boolean,
    handleInput?: Function
}

export default function Input({ type, label, id, inline, handleInput }: InputProps) {
    return (
        <div>
            <label htmlFor={id} className='font-extrabold ml-4 text-lg overflow-hidden'>{label}</label>
            <input 
                type={type} 
                id={id} 
                onInput={(e) => handleInput?.(e.currentTarget.value)}
                className='bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white' 
            />
        </div>
    )
}