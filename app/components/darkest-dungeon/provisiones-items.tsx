'use client'

import { CldImage } from 'next-cloudinary';


export default function ProvisionesItems({ items, tipo }: { items: Array<{ cantidad: number, img: string }>, tipo: number }) {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-8 gap-0">
            {
                (tipo === 2 || tipo === 3 ) ?
                    <div className="relative">
                        <CldImage
                            src="dd/items/sbbq9nxxynywabqvklal"
                            width={72}
                            height={144}
                            alt="dd/items/sbbq9nxxynywabqvklal"
                            priority
                        />
                        <span className="absolute left-0 top-0 ml-1 text-stone-400 font-semibold">{ tipo-1}</span>
                    </div>
                    : ''
            }
            {

                items.map(({ cantidad, img }) => (
                    <div key={img} className="relative">
                        <CldImage
                            src={img}
                            width={72}
                            height={144}
                            alt={img}
                            priority
                        />
                        <span className="absolute left-0 top-0 ml-1 text-stone-400 font-semibold">{cantidad}</span>
                    </div>
                ))
            }
        </div>
    )
}