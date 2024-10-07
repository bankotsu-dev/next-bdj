'use client'

import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { Region } from "@/lib/definitions"

export default function (region: Region) {
    return (
        <Link key={region.id} href={`/darkest-dungeon/regiones/${region.id}`}>
            <div className="flex max-h-screen items-center justify-center">
                <div className="relative flex w-full  flex-row rounded-xl bg-clip-border text-white shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-non bg-clip-border text-white">
                        <CldImage
                            src={region.img}
                            width={300}
                            height={300}
                            alt={region.nombre}
                            priority
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-lg font-semibold leading-relaxed tracking-normal text-yellow-600 antialiased">
                            {region.nombre}
                        </h6>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                            {region.desc_corta}
                        </p>
                    </div>
                </div>
            </div>
        </Link >
    )
}