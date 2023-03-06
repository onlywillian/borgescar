interface ButtonProps {
    children: string,
    handleLoginButtonSubmit?: Function
}

export default function Button({ children, handleLoginButtonSubmit }: ButtonProps) {
    return (
        <button 
            className="bg-[#6F87C5] text-white font-bold font-3xl py-4 px-10 self-center c-pointer rounded overflow-hidden"
            onClick={() => handleLoginButtonSubmit?.()}
        >
            {children}
        </button>
    )
}