

import { getCurios } from "@/lib/actions";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CurioCard } from "./curio-card";
import { Curio } from "@/lib/definitions";

export async function CurioTable({ query, currentPage, region }: { query: string, currentPage: number, region: number }) {
    const data = await getCurios(query, currentPage, region);
    const curios = data.data as Curio[];

    return (
        <>
            <Table>
                <TableCaption>Una lista de los curios base, no incluye MODs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xl">Curios</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        curios.map((curio:Curio) => (
                            <TableRow key={curio.id}>
                                <TableCell className="font-medium">
                                    <CurioCard  {...curio}/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}