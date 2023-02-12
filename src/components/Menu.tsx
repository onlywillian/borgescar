export default function Menu({ handleMenuClick }: any) {
    return (
        <div className="w-screen h-screen absolute flex left-0 top-0 z-10">
            <div className="w-5/6 h-screen bg-black opacity-50"></div>
            <div className="h-screen fixed bg-menu-light right-0 top-0 w-1/6">
                <div className="bg-menu-dark p-4" onClick={handleMenuClick}>
                    <h2 className="text-3xl text-white">MENU</h2>
                </div>
                <div className="p-4 text-xl flex flex-col gap-2">
                    <p className="cursor-pointer">Carros Novos</p>
                    <p className="cursor-pointer">Carros Usados</p>
                    <p className="cursor-pointer">Venda seu Carro</p>
                    <p className="cursor-pointer">Consórcio</p>
                    <p className="cursor-pointer">Financiamento</p>
                </div>
            </div>
        </div>
    )
}