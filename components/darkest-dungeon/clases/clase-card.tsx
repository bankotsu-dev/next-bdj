'use client'

import { CldImage } from "next-cloudinary"
import { Clase } from "@/lib/definitions"

export function ClaseCard(clase: Clase) {
    return (
        <div className="flex max-h-screen items-center justify-center">
            <div className="relative flex w-full  flex-row rounded-xl bg-clip-border text-white shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-non bg-clip-border text-white">
                    <CldImage
                        src={clase.img}
                        width={300}
                        height={300}
                        alt={clase.nombre}
                        priority
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-lg font-semibold leading-relaxed tracking-normal text-yellow-600 antialiased">
                        {clase.nombre}
                    </h6>
                    <CldImage
                        src={clase.img_retrato}
                        width={85}
                        height={85}
                        alt={clase.nombre}
                        className="my-8"
                        priority
                    />
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                        <span className="text-2xl">"</span>{clase.descripcion}<span className="text-2xl">"</span>
                    </p>
                </div>
            </div>
        </div>
    )
}