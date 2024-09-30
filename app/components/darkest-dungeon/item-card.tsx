"use client"

import { CldImage } from 'next-cloudinary';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"




export default function ItemCard({ nombre, descripcion, img }: { nombre: string, descripcion: string | null, img: string }) {
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