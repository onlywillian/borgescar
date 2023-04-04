import Image from "next/image"

import logoImage from '../../public/logo-light.svg'

export default function Aside({ children }: any) {
    return (
        <aside className="w-1/5 bg-aside-bg h-screen sticky flex flex-col gap-y-2">
            <div className="bg-[#33586C] py-8 flex align-center mb-8 shadow-xl">
                <Image src={logoImage} alt='logo' className="h-28"/>
            </div>
            <div className="p-4 flex flex-col gap-4">
                {children}
            </div>
        </aside>
    )
}