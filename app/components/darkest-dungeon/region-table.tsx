
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RegionCard from "./region-card";
import { getRegiones } from "@/lib/actions";

export default async function RegionTabla () {
    const regiones = await getRegiones();

    return (
        <Table>
            <TableCaption>Una lista de las regiones, no incluidas MODs por el momento.</TableCaption>
            <TableBody>
                {
                    regiones.map((region) => (
                        <TableRow key={region.id}>
                            <TableCell className="font-medium">
                                <RegionCard {...region} />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}