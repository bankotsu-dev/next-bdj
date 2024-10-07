

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getClases } from "@/lib/actions";
import { ClaseCard } from "./clase-card";

export async function ClaseTable({ query, currentPage }: { query: string, currentPage: number }) {
    const clases = await getClases(query, currentPage);

    return (
        <Table>
            <TableCaption>Una lista de las clases incluidas MODs.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-xl">Clases</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    clases.map((clase) => (
                        <TableRow key={clase.id}>
                            <TableCell className="font-medium">
                                <ClaseCard {...clase} />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    )
}