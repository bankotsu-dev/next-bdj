
import { Card, CardContent } from "@/components/ui/card"
import { getRegiones } from '@/lib/actions';
import { RegionImg } from "./region-img";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export async function RegionCarousel() {

    const regiones = await getRegiones();
    return (
        <Carousel
            className="w-full"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {regiones.map((region) => (
                    <CarouselItem key={region.id}>
                        <Card>
                            <CardContent className="flex items-center justify-center">
                                <RegionImg region = { region } />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
