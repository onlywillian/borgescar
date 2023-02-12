import Image from 'next/image'
import { useState } from 'react'

import bmw from '../../public/assets/logos/bmw.svg'
import buggati from '../../public/assets/logos/bugatti-2.svg'
import ferrari from '../../public/assets/logos/ferrari-4.svg'

export default function Logos() {
    const [logos, setLogos] = useState([
        {
            id: 1,
            src: bmw,
            alt: 'bmw',
            style: 'w-20 h-20 grayscale-0 border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: false,
        },
        {
            id: 2,
            src: buggati,
            alt: 'buggati',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
        {
            id: 3,
            src: ferrari,
            alt: 'ferrari',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
    ])

    function handleLogoClick(logoAlt: string) {
        const newLogos = logos.map(logo => {
            return logo.alt === logoAlt && logo.grayscale === true ?
                { ...logo, style: 'w-20 h-20 grayscale-0 border-4 p-2 cursor-pointer border-black rounded-full', grayscale: false }
                :
                { ...logo, style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full', grayscale: true }
        })

        setLogos(newLogos)
    }

    return (
        <>
            {logos.map(logo => (
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.style}
                    onClick={() => handleLogoClick(logo.alt)}
                    key={logo.id}
                />
            ))}
        </>
    )
}