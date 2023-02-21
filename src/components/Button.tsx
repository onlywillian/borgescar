export default function Button({ children }: any) {
    return (
        <button className="bg-[#6F87C5] text-white font-bold font-3xl py-4 px-10 self-center c-pointer rounded overflow-hidden">
            {children}
        </button>
    )
}