interface ButtonProps {
    children: string,
    handleButtonClick?: Function
}

export default function Button({ children, handleButtonClick }: ButtonProps) {
    return (
        <button 
            className="bg-[#6F87C5] text-white font-bold font-3xl py-4 px-10 self-center c-pointer rounded overflow-hidden"
            onClick={() => handleButtonClick?.()}
        >
            {children}
        </button>
    )
}