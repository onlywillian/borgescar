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
    type: 1 | 2;
}

export default function Logos({ type }: Props) {
    const [logos, setLogos] = useState([
        {
            id: 1,
            src: bmw,
            alt: 'bmw',
        },
        {
            id: 2,
            src: buggati,
            alt: 'buggati',
        },
        {
            id: 3,
            src: ferrari,
            alt: 'ferrari',
        },
        {
            id: 4,
            src: fiat,
            alt: 'ferrari',
        },
        {
            id: 5,
            src: mclaren,
            alt: 'fiat',
        },
        {
            id: 6,
            src: mercedesBenz,
            alt: 'fiat',
        },
        {
            id: 7,
            src: toyota,
            alt: 'fiat',
        },
        {
            id: 8,
            src: volkswagen,
            alt: 'fiat',
        },
    ])

    return (
        <>
            { type == 1 ? logos.map((logo, index) => {
                if (index < 4) {
                    return (
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="w-20 h-20 grayscale-0 border-4 p-2 border-black rounded-full"
                            key={logo.id}
                        />
                    )
                }
            }) :
                logos.map((logo, index) => {
                    if (index >= 4) {
                        return (
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="w-20 h-20 grayscale-0 border-4 p-2 border-black rounded-full"
                                key={logo.id}
                            />
                        )
                    }
                })
            }
        </>
    )
}