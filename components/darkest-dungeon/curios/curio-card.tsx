'use client'

import { CldImage } from "next-cloudinary";
import { Curio } from "@/lib/definitions";

export function CurioCard(curio : Curio) {
    return (
        <div className="flex max-h-screen items-center justify-center">
        <div className="relative flex w-full  flex-row rounded-xl bg-clip-border text-white shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-non bg-clip-border text-white">
                <CldImage
                    src={curio.img}
                    width={300}
                    height={300}
                    alt={curio.nombre}
                    priority
                />
            </div>
            <div className="p-6">
                <h6 className="block font-sans text-lg font-semibold leading-relaxed tracking-normal text-yellow-600 antialiased">
                    {curio.ll_nombre} / { curio.nombre }
                </h6>
                <span className="text-xs"> { curio.region?.nombre } </span>
                <p className="mt-4 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                   ... continuara
                </p>
            </div>
        </div>
    </div>
    );
}