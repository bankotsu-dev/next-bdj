
import { getProvisiones } from "@/lib/actions";
import { Item } from "@/lib/definitions";
import ProvisionesItems from "./provisiones-items";

interface Provisiones {
    id: number;
    itemId: number;
    regionId: number;
    cantidad: number;
    tipo: number;
    item: Item;
}

interface Provision {
    id: number;
    cantidad: number;
    item: Item;
}

export default async function RegionProvisiones({ regionID, tipo, titulo }: { regionID: number, tipo: number, titulo: string }) {
    const data = await getProvisiones(regionID, tipo);
    const provisiones = data.data as Provisiones[];
    const provisionesItems = provisiones.map(({ cantidad, item }) => {
        return {
            cantidad,
            img: item.img,
        }
    });

    return (
        <div className={`flex max-h-screen mt-8 ${ provisiones.length < 1 ? 'hidden' : ''}`}>
            <div className="relative flex w-full flex-row rounded-xl bg-clip-border text-white shadow-md">
                <div className="w-full sm:w-1/3">
                    <h6 className="mb-2 block font-sans text-3xl font-semibold leading-relaxed tracking-normal text-yellow-600 antialiased">
                        {titulo}
                    </h6>
                    <div>
                        <ul>
                            {
                                provisiones.map(({ id, cantidad, item }: Provision) => (
                                    <li key={id}>
                                        {cantidad} {item.nombre}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="relative mr-2 rounded-xl rounded-r-non bg-clip-border">
                    <ProvisionesItems items={provisionesItems} tipo={tipo} />
                </div>
            </div>
        </div>
    )
}