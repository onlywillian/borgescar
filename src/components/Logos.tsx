'use client'

import Image from 'next/image'
import { useState } from 'react'

import bmw from '../../public/assets/logos/bmw.svg'
import buggati from '../../public/assets/logos/bugatti-2.svg'
import ferrari from '../../public/assets/logos/ferrari-4.svg'
import fiat from '../../public/assets/logos/fiat-3.svg'
import mclaren from '../../public/assets/logos/mclaren.svg'
import mercedesBenz from '../../public/assets/logos/mercedes-benz.svg'
import toyota from '../../public/assets/logos/toyota.svg'
import volkswagen from '../../public/assets/logos/volkswagen.svg'

interface Props {
    type: boolean
}

export default function Logos({ type }: Props) {
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
        {
            id: 4,
            src: fiat,
            alt: 'ferrari',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
        {
            id: 5,
            src: mclaren,
            alt: 'fiat',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
        {
            id: 6,
            src: mercedesBenz,
            alt: 'fiat',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
        {
            id: 7,
            src: toyota,
            alt: 'fiat',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
        {
            id: 8,
            src: volkswagen,
            alt: 'fiat',
            style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full',
            grayscale: true,
        },
    ])

    // function handleLogoClick(logoAlt: string) {
    //     const newLogos = logos.map(logo => {
    //         return logo.alt === logoAlt && logo.grayscale === true ?
    //             { ...logo, style: 'w-20 h-20 grayscale-0 border-4 p-2 cursor-pointer border-black rounded-full', grayscale: false }
    //             :
    //             { ...logo, style: 'w-20 h-20 grayscale border-4 p-2 cursor-pointer border-black rounded-full', grayscale: true }
    //     })

    //     setLogos(newLogos)
    // }

    return (
        <>
            { type ? logos.map((logo, index) => {
                if (index < 4) {
                    return (
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="w-20 h-20 grayscale-0 border-4 p-2 cursor-pointer border-black rounded-full"
                            key={logo.id}
                        />
                    )
                }
            }) :
            logos.map((logo, index) => {
                if (index > 4) {
                    return (
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="w-20 h-20 grayscale-0 border-4 p-2 cursor-pointer border-black rounded-full"
                            key={logo.id}
                        />
                    )
                }
            }
        </>
    )
}