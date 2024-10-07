"use client"

import { CldImage } from 'next-cloudinary';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Item } from '@/lib/definitions';




export function ItemCard({ item }: { item: Item }) {
    const { nombre, descripcion, img } = item;
    
    return (
        <Card key={nombre} className="text-center">
            <CardHeader>
                <CardTitle>{nombre}</CardTitle>
                <CardDescription>{descripcion ? descripcion : ""}</CardDescription>
            </CardHeader>
            <CardContent>
                <CldImage
                    className='m-auto'
                    src={img}
                    width={72}
                    height={144}
                    alt={nombre}
                    priority
                />
            </CardContent>
        </Card>

    );
}