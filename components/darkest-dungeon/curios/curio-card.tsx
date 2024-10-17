'use client'

import { CldImage } from "next-cloudinary";
import { Curio } from "@/lib/definitions";
import Image from "next/image";

export function CurioCard(curio : Curio) {
    const items = curio.itemsOnCurio;
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
                <span className="text-xs"> { curio.region ? curio.region.nombre : 'COMÚN / MISIÓN' } </span>
                <div className="mt-4 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                    { items.map((itemOnCurio) => {
                        return (
                            <div key={itemOnCurio.id}>
                                <Image 
                                    src="/dd/sh.png"
                                    width={24}
                                    height={24}
                                    alt="img"
                                    className="inline-block mr-1"
                                />
                                <span>{itemOnCurio.item ? itemOnCurio.item.nombre : 'Nothing'}: </span> 
                                <span>{itemOnCurio.efecto}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    );
}