'use client'

import { Region } from "@/lib/definitions";
import { CldImage } from "next-cloudinary";

export default function RegionImg({region}: {region: Region}) {
    return (
        <CldImage
            src={region.img}
            width={800}
            height={300}
            alt={region.nombre}
            priority
            className="w-full h-full object-cover"
        />
    )
}