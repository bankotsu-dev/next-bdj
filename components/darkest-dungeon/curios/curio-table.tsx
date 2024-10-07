

import { getCurios } from "@/lib/actions";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CurioCard } from "./curio-card";

export async function CurioTable({ query, currentPage }: { query: string, currentPage: number }) {
    const data = await getCurios(query, currentPage);
    const curios = data.data as [];

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
                        curios.map((curio: any) => (
                            <TableRow key={curio.id}>
                                <TableCell className="font-medium">
                                    <CurioCard />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>
    )
}