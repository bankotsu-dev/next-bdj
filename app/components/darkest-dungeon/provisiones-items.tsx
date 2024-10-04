'use client'

import { CldImage } from 'next-cloudinary';


export default function ProvisionesItems({ items, tipo }: { items: Array<{ cantidad: number, img: string }>, tipo: number }) {
    return (
        <div className="columns-4 sm:columns-6 xl:columns-8 gap-0 sm:gap-2">

            {
                items.map(({ cantidad, img }) => (
                    <div key={img} className="relative">
                        <CldImage
                            className="w-full"
                            src={img}
                            width={72}
                            height={144}
                            alt={img}
                            priority
                        />
                        <span className="absolute left-0 top-0 ml-2 mt-1 text-stone-400 font-semibold">{cantidad}</span>
                    </div>
                ))
            }
        </div>
    )
}